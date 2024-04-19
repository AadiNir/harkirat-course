const express = require('express');
const app = express();
const router = express.Router();
const userrouter = require('../Routes/user');
router.use('/user',userrouter);
module.exports = router