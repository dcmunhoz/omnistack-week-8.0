const express       = require('express'); // Express
const DevController = require('./controllers/DevController');
const routes        = express.Router();    // Router express.

// Principais metodos HTTP:
// GET, POST, PUT, DELETE

routes.get('/', (req, res) => {

    let name = req.query.name;

    return res.json({ message: `Hello ${name}` });

});

routes.post('/devs', DevController.store);


module.exports = routes;