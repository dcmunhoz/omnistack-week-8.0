const express           = require('express');                           // Express
const DevController     = require('./controllers/DevController');       // Controller do Dev
const LikeController    = require('./controllers/LikeController');      // Controller do Like
const DislikeController = require('./controllers/DislikeController');   // Controller do Like
const routes            = express.Router();                             // Router express.

// Principais metodos HTTP:
// GET, POST, PUT, DELETE

// Retorna a lista de usuário que não tenha dado like nem dislike
routes.get('/devs', DevController.index);

// Cadastra um novo Dev no banco
routes.post('/devs', DevController.store);

// Da like em um Dev
routes.post('/devs/:devId/likes', LikeController.store);

// Da dislike em um Dev
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;