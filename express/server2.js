const express = require('express');
const dotenv = require('dotenv');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
mongoose.connect("mongodb+srv://aadinir:Aamod123@cluster0.sszhzlo.mongodb.net/?retryWrites=true&w=majority")
const Admin =  mongoose.model("Admin",{ username :String, password: String});
const Courses = mongoose.model("Courses",{ title: String, description: String, price: Number});
// const ka = new Courses({
//     title:"BCSE203",
//     descrption:"Data structure and algorithm",
//     price: 100
// })
// ka.save();
dotenv.config();
app.post('/admin/signup',async (req,res)=>{
    // let {username1,password1} =req.body;
    try{
    const user =  new Admin({
        username: username1,
        password: password1
    })
    await user.save();
    res.send(sup);

    }catch(err){
        res.send({"error":"we encounterd an error please wait till we resolve"})
    }

    
})
const k = process.env.SECRET_TOKEN;
app.post('/admin/signin',async(req,res)=>{
    let {username1,password1} =req.body;

    const sup = await Admin.find();
    sup.map((e)=>{
        if(e.username==username1 && e.password==password1){
            res.send(jwt.sign(e.password,k));
        }
    })

})
app.post('/admin/courses',async(req,res)=>{
    let t= req.headers.authorization;
    try{
        const a = jwt.verify(t,k);
        // res.send(`hola welcome ${a}`);
        let {title1,description1,price1}= req.body;
        const newfile = new Courses({
           title: title1,
           description: description1,
           price: price1 
        })
        await newfile.save();
        res.send("course created successfully");
    }catch(err){
        res.send({"error":"we encounterd an error please wait till we resolve"});
    }

})
app.get('/admin/courses',async(req,res)=>{
    let getcourses  = await Courses.find();
    let j = []
    getcourses.map((e)=>{
        j.push(e.title);
    })
    res.send(j);
})
app.listen(3000,(req,res)=>{
    console.log("server is up on port 3000");
})