const express = require('express');
const z = require('zod');
const dotenv = require('dotenv');

const schema = z.array(z.number());
const app = express();
const jwttoken = require('jsonwebtoken');
dotenv.config();
app.use(express.json());
let totalreq = 0;
function caltotalreq(req,res,next){
    totalreq+=1;
    next();
}
app.use((err,req,res,next)=>{
    res.json({error:"there is an error"});
})
app.get("/",caltotalreq,(req,res)=>{
    res.send(`the total number of request for this api is ${totalreq}`);
})
app.post("/",(req,res)=>{
    const arr= req.body.kidneys;
    const response=schema.safeParse(arr);
    res.json(response);
})

// JWT TOKE ASSIGNEMENT
const sec = process.env.SECRET_TOKEN;
console.log(sec);
const val = {
    ans:"hola"
}
app.post("/jwtassignment",(req,res)=>{
    const data ={
        username:req.body.username,
        passwd:req.body.passwd
    }
    const response =  jwttoken.sign(data.username,sec);
    val.ans = response;
    res.send(response);
})

app.get("/jwtassignment",async(req,res)=>{
    const response = jwttoken.verify("eyJhbGciOiJIUzI1NiJ9.YWFkaW5pcjI3QGdtYWlsLmNvbQ.m3U8QCnfBt9vaB2AVlcKx4yTXg1WFVNbZXYx1SjeIRg",sec);
    res.json(response);
})

app.listen(3000,(req,res)=>{

    console.log("listening on port 3000");
})
