const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');
function authMiddleware(req,res,next){
    const gottoken = req.header.Authorization;
    if(!gottoken || gottoken.startswith("Bearer ")){
        return res.status(403).json({});
    }
    const ggtoken = gottoken.split(" ")[1];
    try{
        const decoded = jwt.verify(ggtoken,JWT_SECRET);
        req.userId = decoded.usrid;
        next();
    }catch(err){
    return res.status(403);
    }
}
moudule.exports = authMiddleware;