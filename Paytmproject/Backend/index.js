const express = require('express');
const Mainrouter = require('./Routes/index');
const cors = require('cors');
const app = express();
// const PORT = 3000;
app.use(cors());
app.use(express.json());

app.use("/api/v1",Mainrouter)

app.listen(3000);