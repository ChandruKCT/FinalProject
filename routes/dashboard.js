var express = require('express');
var router = express.Router();


var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    console.log(req.session);
    console.log(req.cookies);
    console.log(req.cookies.user_sid);
    if (req.isAuthenticated() && req.session.auth===true &&req.cookies.user_sid)
    {
        console.log("yes");
        return next();
    }
    console.log("no");
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
}
/* GET home page. */


    router.get('/', isAuthenticated,function (req, res) {
        res.render('home.html', {title: ' Dashboard Page '});
    });

    router.get('/some',function (req,res) {
        res.end("something");
    });

    router.get('/signout', function(req, res) {
        delete req.session;
        delete req.cookies;
        req.logout();
        res.redirect('/');
    });

// router.post('/login',function (req,res) {
//     controller.check_credentials(req,res);
// })


module.exports=router;




