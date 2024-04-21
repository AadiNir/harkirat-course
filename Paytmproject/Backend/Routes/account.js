const express = require("express");
const router = express.Router();
const authMiddleware = require('../middleware')
const Accounts = require('../db');
const { default: mongoose } = require("mongoose");

router.get('/balance',authMiddleware,async (req,res)=>{
    const dt = await Accounts.findOne({_id: req.userId});
    if(dt){
        res.json({
            balance: dt.balance
        })
    }
    res.status(411).json({
        message:"No accounts found"
    })

})


router.post('/transfer',authMiddleware,async(req,res)=>{
    const fromid = req.userId;
    const data = req.body;
    const toid = data.to;
    const session = await mongoose.startSession();
    session.startTransaction();
    const usr = await Accounts.findOne({_id:fromid}).session(session);
    if(!usr||usr.balance<data.balance){
        await session.abortTransaction();
        res.status(411).json({
            message:"Insufficent Balance"
        })
    }
    const frm = await Accounts.findOne({_id:toid}).session(session);
    if(!frm){
        await session.abortTransaction();
        res.status(411).json({
            message:"To User not found"
        })
    }
    await Accounts.updateOne({_id:fromid},{$inc : {balance:-data.balance}}).session(session);
    await Accounts.updateOne({_id:toid},{$inc : {balance:data.balance}}).session(session);
    session.commitTransaction();
    res.json({
        message:"Transfer Successfull"
    })
})

module.exports=router


