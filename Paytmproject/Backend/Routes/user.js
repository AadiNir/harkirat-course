const express = require('express');
const router = express.Router();
const z = require('zod');
const {User,Accounts} = require('../db');
const {JWT_SECRET} = require('../config');
const authMiddleware = require('../middleware')
const jwt = require('jsonwebtoken')
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
    const userexsist = await User.findOne(
        {username:data.username}
    );
    if(userexsist){
        return res.status(411).json({
            message:"Email already taken/Incorrect inputs 2"
        })
    }
    const usr = await User.create({
        username:data.username,
        password:data.firstname,
        firstname:data.lastname,
        lastname: data.lastname
    })
    console.log("user been created")
    await Accounts.create({
        userId:usr._id,
        balance:Math.floor(Math.random()*10000)+1
    })

    const token = jwt.sign({userid: usr._id},JWT_SECRET);

    res.json({
        message:"user created successfully",
        Token: token
    })
})
const usrcheck = z.object({
    username:z.string(),
    password:z.string()
})
router.post('/signin',async (req,res)=>{
     const data = req.body;
     try{
        usrcheck.parse(data);
     }catch(err){
        res.status(411).json({
            message:"Sign in unsuccessfull"
        })
     }
     const usr = await User.findOne({
        username:data.username,
        password:data.password
    });

    
    if(usr){
        const token = jwt.sign(usr._id,JWT_SECRET);
        res.json({
            Token: token
        })
     }
     res.json({
        message:"Sign in unsuccessfully"
     })
})

router.put('/new',authMiddleware,async(req,res)=>{
    actualid = req.userid;
    const datafromuser = req.body;
    await User.updateOne({
        _id:actualid
    },datafromuser)
    res.json({
        message:"Successfully updated"
    })
})

router.get('/bulk',async(req,res)=>{
    const anyname = req.query.filter;
    const usr = await User.find({
        $or:[
            {firstname:{"$regex": anyname}},
            {lastname: {"$regex":anyname}}
        ]
    })
    res.json(usr.map(users =>({
        username: users.username,
        firstname:users.firstname,
        lastname: users.lastname,
        _id:users._id
    })))
})
module.exports = router;