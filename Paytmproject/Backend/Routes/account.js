const express = require('express');
const router = express.Router();
const authMiddleware = require('../')
const Accounts = require('../db')
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

module.exports={
    router
}


