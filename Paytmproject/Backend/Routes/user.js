const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../db');
const z = require('zod');
const {JWT_SECRET} = require("../config");
const { authMiddleware } = require('../middleware');
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
router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})
router.post('/Update',authMiddleware,async (req,res)=>{
    const data = req.body;
    await User.updateOne({id:data.userid},data);

})
module.exports = router;