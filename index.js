//imports
const express = require('express')
const app = express();
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
require('./model/db')
//views
app.set('view engine','ejs')
app.set('views','views')

//routes

const login = require('./routes/login')
const register = require('./routes/register')

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(session({
    secret : "My Blog",
    resave : true,
    saveUninitialized : false
}))
app.use(login)
app.use(register)

app.listen(3000,()=> console.log("Server running on port 3000"))