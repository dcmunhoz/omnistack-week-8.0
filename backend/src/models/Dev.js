const { Schema, model } = require('mongoose'); // Require do Schema e model do Mongoose

// Estrutura para criar um novo Schema(table) no mongodb
const DevSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Dev', DevSchema);