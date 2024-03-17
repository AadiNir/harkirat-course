const express = require('express');
const app = express();
const PORT = 3000;
const User = require('./user')
const Mainrouter = express.Router();

Mainrouter.use('/user',User)
module.exports = Mainrouter;