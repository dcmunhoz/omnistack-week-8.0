const express   = require('express');   // Express
const mongoose  = require('mongoose');  // Mongoose (Connecta com o Mongodb Atlas) 
const routes    = require('./routes');  // Rotas da aplicação

// Servidor express.
const server = express();

// Faz a conexão com o Mondodb Atlas
mongoose.connect('mongodb+srv://omni:omni@cluster0-jiamz.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json()); // Necessário para que o express entende o JSON(application/json)
server.use(routes);         // Utiliza as rotas que foram criadas no arquivo externo.

// Faz o servidor escutar uma porta.
server.listen(3333);