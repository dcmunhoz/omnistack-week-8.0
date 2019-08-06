const express = require('express'); // Express
const Dev     = require('./controllers/DevController');
const routes  = express.Router();    // Router express.

// Principais metodos HTTP:
// GET, POST, PUT, DELETE

routes.get('/', (req, res) => {

    let name = req.query.name;

    return res.json({ message: `Helslo ${name}` });

});

routes.post('/devs', Dev.store);


module.exports = routes;