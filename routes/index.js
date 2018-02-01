var express=require('express');


var sessionOpts = {
    saveUninitialized: true, // saved new sessions
    resave: false, // do not automatically write to the session store
    secret: 'mySecretKey',
    cookie : { httpOnly: true, maxAge: 2419200000 } // configure when sessions expires
}

var app = express();
var passport = require('passport');

var expressSession = require('express-session');
app.use(expressSession({
    key: 'user_sid',
    secret: 'abcd123',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1000
    }
}));

app.use(passport.initialize());
app.use(passport.session(sessionOpts));

const initPassport = require('../passport/init.js');
initPassport(passport);

var login=require('../routes/login.js')(passport);
app.use('/',login);

var signup=require("../routes/signup.js")(passport);
app.use('/signup',signup);

var code=require('../routes/code.js');
app.use('/code',code);

var home=require("../routes/dashboard.js");
app.use('/home',home);

module.exports = app;
