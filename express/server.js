const express = require('express');
const z = require('zod');
const schema = z.array(z.number());
const app = express();
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

app.listen(3000,(req,res)=>{
    console.log("listening on port 3000");
})