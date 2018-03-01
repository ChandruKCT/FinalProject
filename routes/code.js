var express = require('express');
var router = express.Router();
const passport = require('passport');
const session = require('express-session');
let controller=require('../controllers/code-controller.js');
/* GET home page. */
router.get('/', function(req, res) {
    res.render('code.html', { title: ' Login Page ' });
});
/*Editor/editor.html*/
router.post('/output',function (req,res) {
    console.log(req.body);
    controller.code_execute(req,res);
});

module.exports = router;