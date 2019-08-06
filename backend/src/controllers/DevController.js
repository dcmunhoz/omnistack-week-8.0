const axios = require('axios');         // Lib Axios para requisições AJAX
const Dev   = require('../models/Dev'); // Model do Dev

// Controller de um Dev
module.exports = {

    // Retorna a lista de todos os usuários
    async index(req, res){

        // Pega o usuário logado.
        const { user } = req.headers;

        // Busca o usuário logado no banco.
        const loggedDev = await Dev.findById(user);

        // Pesquisa no mongodb os Devs de acordo com os filtros 
        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },                 // Não pode ser o usuário logado
                { _id: { $nin: loggedDev.likes } },     // Não pode estar na lista de likes
                { _id: { $nin: loggedDev.dislikes } }   // Não pode estar na lista de dislikes
            ]
        });

        // Retorna a lista de Devs
        return res.json(users);

    },

    // Salva um Dev no banco
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