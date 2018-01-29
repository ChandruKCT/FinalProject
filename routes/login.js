var express = require('express');
var router = express.Router();


const controller=require('../controllers/login-controller.js');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index.html', { title: ' Login Page ' });
});

router.post('/result',function (req,res) {
    controller.check_credentials(req,res);
})

module.exports=router;
