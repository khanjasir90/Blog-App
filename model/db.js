const mongoose = require('mongoose')// import mongoose

const conn_url = "mongodb+srv://blog-app:jasir%40123@cluster0.39qm9.mongodb.net/Blog-App-DB?retryWrites=true&w=majority" //connection url
mongoose.connect(conn_url,{useNewUrlParser:true},(err)=>{
    if(!err) console.log('Connection Created') // connection successfully created
    else console.log('Error occured while created a Connection : ' + err) // error while creating a database connection
})

