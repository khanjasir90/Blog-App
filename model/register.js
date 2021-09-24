const mongoose = require('mongoose')
const registerSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String
})

module.exports = mongoose.model('UserRegister',registerSchema)
