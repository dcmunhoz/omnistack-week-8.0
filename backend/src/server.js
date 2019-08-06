const express   = require('express');   // Express
const mongoose  = require('mongoose');  // Mongoose (Connecta com o Mongodb Atlas) 
const routes    = require('./routes');  // Rotas da aplicação
const cors      = require('cors');      // Cors (Requisições externas) 

// Servidor express.
const server = express();

// Faz a conexão com o Mongodb Atlas
mongoose.connect('mongodb+srv://omni:omni@cluster0-jiamz.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());         // Necessário para habilitar requests vindos de outras URL
server.use(express.json()); // Necessário para que o express entende o JSON(application/json)
server.use(routes);         // Utiliza as rotas que foram criadas no arquivo externo.

// Faz o servidor escutar uma porta.
server.listen(3333);