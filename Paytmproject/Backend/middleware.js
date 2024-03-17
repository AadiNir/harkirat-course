const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('./config');
function authMiddleware(req,res,next){
    if(!token){
        res.status(400).json({
            message:"given jwt token is error"
        })    }
    try{
        const token = req.headers.authtoken;
        const decode = jwt.verify(token,JWT_SECRET)
        req.userid = decode.user;
        next();
    }catch(err){
        res.status(400).json({
            message:"given jwt token is error"
        })
    }

}
module.exports={authMiddleware};