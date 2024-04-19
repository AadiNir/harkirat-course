const express = require('express');
const app = express();
const router = express.Router();
const userrouter = require('../Routes/user');
const accountrouter = require('../Routes/account');
router.use('/user',userrouter);
router.use('/account',accountrouter)
module.exports = router