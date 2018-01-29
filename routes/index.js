var express=require('express');
var app=express();

var login=require('../routes/login.js');
app.use('/login',login);

var code=require('../routes/code.js');
app.use('/code',code);

module.exports = app;
