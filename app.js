require('dotenv').config();

const express = require('express');
const app = express();


 
    // routage
    const index = require("./routes/index.js");
    app.use("/", index);

    module.exports = app;