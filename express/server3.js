const express = require('express');
const app = express();

let numberofrequest = 0;
// setInterval(()=>{
//     numberofrequest={};
// },10000);

function chechspam(req,res,next){
    numberofrequest=1+numberofrequest;
    if(numberofrequest>5){
        res.status(404).send("not found");
    }else{
        numberofrequest+=1;
        next();
    }
}
app.use(chechspam);

app.get('/user',(req,res)=>{
    let val = Number(req.headers.userid);
    numberofrequest+=val; 

    res.send(`this is a spam free website ${numberofrequest}`);    
})

app.listen(3000,()=>{
    console.log("new project running on port 3000");
}
)