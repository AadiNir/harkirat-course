const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../db');
const z = require('zod');
const {JWT_SECRET} = require("../config");
const user =  z.object(
    {
        username: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        password:z.string()
    }
) 

router.post('/Signup',async(req,res)=>{
    let data = req.body;
    try{
        user.parse(data);

    }catch(err){
        res.json(err);
    }
    const g = await User.findOne({
        Username: data.username
    })
    if(g){
        res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }
    const tempuser = await User.create({
        Username:data.username,
        Firstname:data.firstName,
        Lastname:data.lastName,
        Password:data.password
    })
    const tempid = tempuser._id;
    const token = jwt.sign(tempid,JWT_SECRET);
    res.json({
        message:"user created successfully",
        tokens:  token
    })


    



})
module.exports = router;