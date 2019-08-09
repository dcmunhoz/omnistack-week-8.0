const express   = require('express');   // Express
const mongoose  = require('mongoose');  // Mongoose (Connecta com o Mongodb Atlas) 
const routes    = require('./routes');  // Rotas da aplicação
const cors      = require('cors');      // Cors (Requisições externas) 

// Servidor express.
const app = express();
const server     = require('http').Server(app);
const io        = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {

    // Minha versão para pegar o id do usuário    
    // socket.on("user_connected", (id) => {
        
    //     connecteUsers[id.userId] = socket.id;
    //     console.log("id usuário", id.userId );

    // });

    const { user } = socket.handshake.query;
    connectedUsers[user] = socket.id;

});

// Faz a conexão com o Mongodb Atlas
mongoose.connect('mongodb+srv://omni:omni@cluster0-jiamz.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use( (req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
});

app.use(cors());         // Necessário para habilitar requests vindos de outras URL
app.use(express.json()); // Necessário para que o express entende o JSON(application/json)
app.use(routes);         // Utiliza as rotas que foram criadas no arquivo externo.

// Faz o servidor escutar uma porta.
server.listen(3333);