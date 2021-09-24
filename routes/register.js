const express = require('express')
const router  = express.Router()
const Register = require('../model/register')
router.get('/register',(req,res)=>{
    res.render('register',{
        error : "*All Fields are Mandatory"
    })
})

router.post('/register',(req,res,next)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const cpassword = req.body.cpassword
    if(cpassword != password) {
        res.render('register',{
            error : "Passwords don't match"
        })
    }else if(!name.trim() || !email.trim() || !password.trim() || !cpassword.trim()) {
        res.render('register',{
            error : "Text Fields cannot be Blank"
        })
    }else{
        Register.findOne({email:email},(err,obj)=>{
            if(!obj) {
                const user = new Register({
                    name : name,
                    email : email,
                    password : password
                })
                if(user.save()) {
                    res.redirect('/login')
                }
            }else{
                res.render('register',{
                    error : 'Email Already Exists!'
                })
            }
        })
    }
})

module.exports = router
