const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
// const auth = require("../middleware/auth")
const cors = require('cors')
const adminUser = require('../models/adminUsers')


// router.get('/', cors(), (req, res) => {

// })

router.post('/admin/login', cors(), async(req, res)=>{
    const {username, password} = req.body

    try{
        const check = await adminUser.findOne({username:username})

        if(check){
            if(!check.validPassword(password)){
                req.flash('error', 'Incorrect Credentials')
                res.status(401).json(
                    {
                        message : 'Incorrect Credentials'
                    }
                )
            }
            else{
                console.log(check.username + ' is logging in');
                const tkn = jwt.sign(
                    {
                        username: check.username,
                        user_id: check._id
                    },
                    process.env.AUTH_SECRET,

                    {
                        expiresIn: '24h'
                    }
                );

                return res.status(200).json({
                    message: 'success',
                    token: tkn,
                    user_id: check._id
                })
            }
        }
        else{
            res.status(401).json({ message :'Does not exist'})
        }

    }
    catch(e){
        res.status(500).json({
            message : e
        })
    }
})


module.exports = router