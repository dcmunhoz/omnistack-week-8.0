const express = require('express');

const routes = express.Router();

// Principais metodos HTTP:
// GET, POST, PUT, DELETE

routes.get('/', (req, res) => {

    let name = req.query.name;

    return res.json({ message: `Helslo ${name}` });

});

routes.post('/devs', (req, res) => {
    return res.json(req.body);
});


module.exports = routes;