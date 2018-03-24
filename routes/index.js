let express = require('express');
let router = express.Router();

/* GET home page. */

let problem_solving_controller = require("../controllers/problem-controller");
let history_controller = require("../controllers/history-controller");

router.get('/', function(req, res, next) {
  res.render('dashboard.html', { title: 'Dashboard' });
});

router.get('/history/:user_id/:prob_id', function (req, res) {
    history_controller.fetch_history_of_user_of_problem(req, res);
});


router.post('/history/:user_id/:prob_id', function (req, res) {
    history_controller.post_history_of_user_of_problem(req, res);
});

router.get('/:subject', function(req, res) {
    problem_solving_controller.fetch_problem_solving_problems(req, res);
});

router.get('/:subject/:topic', function (req, res) {
    problem_solving_controller.fetch_problem_solving_topics(req, res);
});

router.post('/:subject/:topic', function (req, res) {
    problem_solving_controller.post_problem_solving_problems(req, res);
});

router.get('/:subject/:user_id/:prob_id', function (req, res) {
    problem_solving_controller.fetch_problem_solving_description(req, res);
});



module.exports = router;
