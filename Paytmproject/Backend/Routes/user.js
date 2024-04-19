const express = require('express');
const router = express.Router();
const z = require('zod');
const User = require('../db');
const JWT_SECRET = require('../config');
const userSchema =z.object( {
    username:z.string().email(),
    firstname:z.string(),
    lastname: z.string(),
    password:z.string()
})
router.post('/signup',async (req,res)=>{
 
    const data = req.body;
    try{
        userSchema.parse(data);
    }catch(err){
        res.status(411).json( {
            message: "Email already taken / Incorrect inputs"
        }
        )
    }
    const userexsist = await User.findOne(data.username);
    if(userexsist){
        res.status(411).json({
            message:"Email already taken/Incorrect inputs"
        })
    }
    const usr = await User.create({
        username:data.username,
        password:data.firstname,
        firstname:data.lastname,
        lastname: data.lastnae
    })
    const token = jwt.sign(usr._id,JWT_SECRET);
})
module.exports = router;