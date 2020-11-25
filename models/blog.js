const mongoose = require('mongoose')

const Blog = mongoose.model('Blog', {
    marca: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    modelo: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    cilindrada: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    combustible: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

})

module.exports = Blog

