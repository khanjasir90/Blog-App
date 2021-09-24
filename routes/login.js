const express = require('express')
const { sessionIsSet } = require('../middleware')
const router  = express.Router()
const Register = require('../model/register')
router.get('/login',(req,res)=>{
    if(req.session.user) {
        res.redirect('/home')
    }
    res.render('login',{
        error : "*All Fields are Mandatory"
    })
})

router.post('/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password
    console.log(email)
    Register.findOne({email:email},(err,obj)=>{
        if(err) {
            console.log(err)
        }else if(!obj) {
            res.render('login',{
                error : "Register First! Email does'nt Exist"
            })
        }else{
            console.log(password)
            console.log(obj.password)
            if(obj.password != password) {
                res.render('login',{
                    error : "Incorrect Password!"
                })
            }else{
                req.session.user  = email
                res.redirect('/home')
            }
        }
    })
})

module.exports = router