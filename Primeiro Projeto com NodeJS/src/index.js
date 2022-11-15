// importa o express:
const express = require('express');
const {v4:uuidv4} = require("uuid");
const app = express();

app.listen(3333);
app.use(express.json());

const customers = []

// Middleware
function verifyIfExistingAccountCPF(request,response,next){
  const {cpf} = request.headers;

  const customer = customers.find(customer => customer.cpf === cpf );

  if (!customer){
    return response.status(400).json({error:"Customer not found"});
  }
  // Permite acesso a variavel customer 
  request.customer = customer;

  // next () will run the code when middleware function is finished.
  return next();
}

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === 'credit'){
      return acc + operation.amount;
    } else {
      return acc - operation.amount;
    }  
  }, 0);

  return balance;
}

app.post("/accounts", (request,response) => {
  const {cpf,name} = request.body;
  const customerAlreadyExists = customers.some(customer => customer.cpf === cpf)

  if (customerAlreadyExists) {
    return response.status(400).json({error: "this customer already exists"})
  }

  customers.push({
    cpf,
    name,
    id:uuidv4(),
    statement:[]
  });
  return response.status(201).send()
});

app.get("/statement", verifyIfExistingAccountCPF, (request, response) => {  
  const{customer} = request;

  return response.json(customer.statement);
});

app.post("/deposit", verifyIfExistingAccountCPF, (request,response) => {
  const {description, amount} = request.body;
  
  const {customer} = request;

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type:"credit"
  }

  customer.statement.push(statementOperation);

  return response.status(201).send();
});

app.post("/withdraw", verifyIfExistingAccountCPF, (request,response) => {
  const {amount} = request.body;  
  const {customer} = request;

// Como o software sabe que deve utilizar apenas o amount do objeto customer.statement?
  const balance = getBalance(customer.statement);

  if(balance < amount) {
    return response.status(400).json({error:"insufficient funds!"})
  }

  const statementOperation = {    
    amount,
    created_at: new Date(),
    type:"debit"
  };

  customer.statement.push(statementOperation);

  return response.status(201).send();

})

app.get("/statement/date", verifyIfExistingAccountCPF, (request, response) => {  
  const {customer} = request;
  const {date} = request.query;

  const dateFormat = new Date(date + " 00:00")

  const statement = customer.statement.filter((statement) => statement.created_at.toDateString() === new Date(dateFormat).toDateString()
  );    
  return response.json(statement);  
});

app.put("/account", verifyIfExistingAccountCPF, (request, response) => {
  const {customer} = request;
  const {name} = request.body;

  customer.name = name;

  return response.status(201).send();
})

app.get("/account", verifyIfExistingAccountCPF, (request, response) => {
  const {customer} = request;

  return response.json(customer)
})

app.delete("/account", verifyIfExistingAccountCPF, (request,response) => {
  const {customer} = request;
  
  customers.splice(customer,1);

  return response.status(200).json(customers);  
})

app.get("/balance", verifyIfExistingAccountCPF, (request,response) => {
  const {customer} = request;
  const balance = getBalance(customer.statement)

  return response.json(balance);
})