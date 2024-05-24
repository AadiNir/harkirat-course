const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');
const express = require('express');
const app = express();
const router = express.Router();
function authMiddleware(req, res, next) {
    const gottoken = req.headers.authorization;
    if (!gottoken || !gottoken.startsWith("Bearer ")) {
        return res.status(403).json({"hola":"error"});
    }
    const ggtoken = gottoken.split(" ")[1];
    try {
        const decoded = jwt.verify(ggtoken, JWT_SECRET);
        req.userId = decoded.userid;
        } catch (err) {
        return res.status(403).json({"new error":"yes it is"});
    }
    next();
}
router.use(authMiddleware);

module.exports = authMiddleware;
