const express = require('express');
const routes = require('./routes');

// Servidor express.
const server = express();

server.use(express.json());
server.use(routes);

// Faz o servidor escutar uma porta.
server.listen(3333);