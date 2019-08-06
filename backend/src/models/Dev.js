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
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
}, {
    timestamps: true
});

module.exports = model('Dev', DevSchema);