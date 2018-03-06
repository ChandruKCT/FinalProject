let express = require('express');
let router = express.Router();

/* GET home page. */

let problem_solving_controller = require("../controllers/problem-solving-controller");
let data_structure__controller = require("../controllers/data-structures-controller");
let algorithm_controller = require("../controllers/algorithm-controller");

router.get('/', function(req, res, next) {
  res.render('dashboard.html', { title: 'Dashboard' });
});

router.get('/:subject', function(req, res) {
    problem_solving_controller.fetch_problem_solving_problems(req, res);
});


router.get('/:subject/:topic', function (req, res) {
    problem_solving_controller.fetch_problem_solving_topics(req, res);
});

router.get('/:subject/:topic/:name', function (req, res) {
    problem_solving_controller.fetch_problem_solving_description(req, res);
});


module.exports = router;
