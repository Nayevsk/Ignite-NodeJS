// importa o express:
const { response } = require('express');
const express = require('express');

const app = express();

//define a porte a ser utilizada. No caso a direcao eh localhost:3333 || 127.0.0.1:3333
app.listen(3333);

//Necessario para informar ao express o tipo de parametro que sera recebido dentro do body.
app.use(express.json())


app.get("/courses", (request,response) => {
  const query = request.query
  console.log(query)
  return response.json(["curso 1","curso 2","curso 3"]);
});

app.post("/courses", (request,response) => {
  const body = request.body;
  console.log(body)
  return response.json(["curso 1","curso 2","curso 3","curso 4"]);
});

// :id representa o parameto 
app.put("/courses/:id", (request,response) => {
  const param = request.params;
  console.log(param)
  return response.json(["curso 6","curso 2","curso 3","curso 4"]);
});

app.patch("/courses/:id", (request,response) => {
  return response.json(["curso 6","curso 7","curso 3","curso 4"]);
});

app.delete("/courses/:id", (request,response) => {
  return response.json(["curso 6","curso 2","curso 4"]);
});


//Para executar esse setup: node src/index.js
