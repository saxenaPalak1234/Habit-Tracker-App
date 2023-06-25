require('dotenv').config();
const express = require('express');
const port = 300 || process.env.port;
const app = express();
const path = require('path');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const db = require("./config/mongoose");
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(expressLayout);
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./router'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server Is Running And Up On Port',port);
})


