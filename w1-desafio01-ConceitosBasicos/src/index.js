const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const {username} = request.headers;
  
  const user = users.find(user => user.username === username);

  if (!user){
    return response.status(400).json({error:"Username does not exists!"})
  }

  request.user = user;

  return next()
}

app.post('/users', (request, response) => {
  const {name,username} = request.body;

  const userAlreadyExists = users.some(user => user.username === username);

  if(userAlreadyExists){
    return response.status(400).json({error:"Username already exists!"})
  }

  users.push({
    name,
    username,
    id:uuidv4(),
    todos:[]
  });
  return response.status(201).json(users).send()
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const {user} = request;

  return response.json(user.todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const {user} = request;
  const {title,deadline} = request.body;

    user.todos.push({
    id:uuidv4(),
    title,
    done:false,
    deadline: new Date(deadline),
    created_at: new Date()
  })

  return response.status(201).send()
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const {user} = request;
  const {title,deadline} = request.body;
  const {id} = request.params;

  const todo = user.todos.find( todo => todo.id === id)

  if (!todo){
    return response.status(400).json({error:"This todo does not exist!"})
  }

  todo.title = title; 
  todo.deadline = new Date(deadline);

  return response.json(todo)
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const {user} = request;
  const {id} = request.params;

  const todo = user.todos.find( todo => todo.id === id)

  if (!todo){
    return response.status(400).json({error:"This todo does not exist!"})
  }

  todo.done = true;

  return response.json(todo)
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const {user} = request;
  const {id} = request.params;

  const todo = user.todos.find( todo => todo.id === id)

  if (!todo){
    return response.status(404).json({error:"This todo does not exist!"})
  }

  user.todos.splice(todo,1);

  return response.status(204).json(user.todos)
});

module.exports = app;