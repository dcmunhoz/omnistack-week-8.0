const axios = require('axios');
const Dev   = require('../models/Dev');

// Controller de um Dev
module.exports = {

    async store(req, res) {

        // Parametro passado pelo POST
        const { username } = req.body;

        // Busca na mongo o usuário informado
        const userExists = await Dev.findOne({user: username});

        // Verifica se o usuário já existe
        if (userExists) {
            
            // Retorna o usuário caso já exista
            return res.json(userExists); // END.

        }

        // Consome a API do github para pegar as informações do usuário passado
        const response = await axios.get(`https://api.github.com/users/${username}`);

        // Extrai as informações necessárias do body
        const { name, bio, avatar_url: avatar } = response.data;

        // Cria o usuário no mongo
        const dev = await Dev.create({ 
            name,
            user: username,
            bio,
            avatar
         });

        // Retorna o usuário criado.
        return res.json(dev); // END.
        
    }

}