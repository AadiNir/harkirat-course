const express = require('express');
const router = express.Router();
const z = require('zod');
const User = require('../db');
const JWT_SECRET = require('../config');
const authMiddleware = require('../')
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
    const userexsist = await User.findOne({username:data.username});
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

    res.json({
        message:"user created successfully",
        Token: token
    })
})
const usrcheck = z.object({
    username:z.string(),
    password:z.string()
})
router.post('signin',async (req,res)=>{
     const data = req.body;
     try{
        usrcheck.parse(data);
     }catch(err){
        res.status(411).json({
            message:"Sign in unsuccessfull"
        })
     }
     const usr = await User.findone({
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
router.put("/",authMiddleware,async (req,res)=>{
    actualid = req.userid;
    
    const datafromuser = req.body;
    await User.updateOne({
        _id:actualid
    },datafromuser);
    res.json("Successfully updated ");

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