const express = require('express');
const router = require('./api/index');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use('/api/v1',router);

app.listen(3000,()=>{
    console.log("Server is up on port 3000")
})