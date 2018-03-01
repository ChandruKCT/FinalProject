var express = require('express');
var router = express.Router();



destroy_cookie=function (req,res,next) {
    if (req.cookies.user_sid && !req.session.user) {
        console.log("destroy cookie called");
        res.clearCookie('user_sid');
    }
    console.log(res.cookies);
    next();
};


module.exports = function(passport) {

    router.get('/', destroy_cookie, function (req, res) {
        req.session.auth=false;
        console.log(req.session);
        res.render('Login/login.html', {title: ' Login Page '});
    });


    router.post('/login', passport.authenticate('login', {
        successRedirect: '/home',
        failureRedirect: '/',
        failureFlash: true
    }));

return router;
}




