//imports
const express = require('express')
const app = express();
const path = require('path')

//views
app.set('view engine','ejs')
app.set('views','views')

//middleware
app.use(express.static(path.join(__dirname, "public")));


//Routes
app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.listen(3000,()=> console.log("Server running on port 3000"))