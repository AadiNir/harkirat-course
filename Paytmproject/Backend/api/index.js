const express = require('express');
const app = express();
const router = express.Router();
const userrouter = require('../Routes/user');
const accountrouter = require('../Routes/account');
// const middlewareFunction = require('../middleware');
const authMiddleware = require('../middleware');
// router.use(authMiddleware);

router.use('/user',userrouter);
router.use('/account',accountrouter);

module.exports = router