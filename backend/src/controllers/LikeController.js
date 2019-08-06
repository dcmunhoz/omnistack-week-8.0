const Dev = require('../models/Dev');

module.exports = {

    // Cria um novo like
    async store(req, res){

        const { user }  = req.headers;  // Id usuário logado
        const { devId } = req.params;   // Id usuário que vai dar dislike

        const loggedDev = await Dev.findById(user);     // Busca o dev logado no mongo
        const targetDev = await Dev.findById(devId);    // Busca o alvo no mongo

        // Verifica se o alvo existe.
        if(!targetDev){

            // Retorna status 400
            return res.status(400).json({error: 'Dev not exists'});

        }

        if(targetDev.likes.includes(loggedDev._id)) {
            console.log("Deu Match");
        }

        // Adiciona o id do target na lista de likes
        loggedDev.likes.push(targetDev._id);

        // Salva a alteração no mongo
        await loggedDev.save()

        return res.json(loggedDev);

    }

};