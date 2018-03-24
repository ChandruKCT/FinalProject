const db_controller=require('../bin/db/db.js');

exports.fetch_problem_solving_problems=async function (req,res) {

    try {
        let subjects = db_controller.subjects;
        let myProb = await subjects.find({subject : req.params.subject}).then(function (data) {
            console.log("-------------");
            console.log(data);
            res.status(200);
            res.end(JSON.stringify(data));
        } ).catch(function (err) {
            console.log("---*---");
            console.log(err);
        });
    } catch (err) {
        console.log(err.message);
        res.status(500);
        res.end(err.message);
    }
};

exports.post_problem_solving_problems = async function (req, res) {

    try {
        let subjects = db_controller.subjects;

        console.log(req.body.level);

        let topic = req.params.topic;
        let sub_id = await subjects.find({
            subject : req.params.subject,
            topic : req.params.topic
        }).select("_id");

        console.log("********************");
        console.log(sub_id[0]);
        console.log("********************");
        req.body.sub_id = sub_id;
        console.log(req.body);
        console.log("********************");
        let problem = db_controller.problem(req.body);
        problem.sub_id=sub_id[0];

        console.log(typeof problem.sub_id);

        await problem.save( function (err, data) {
            if(err) {
                res.json(err);
            } else {
                res.status(200);
                res.json(data);
            }
        })

    } catch (err) {
        console.log(err.message);
    }
};

exports.fetch_problem_solving_topics = async function (req, res) {

    try {
        console.log();
        let subjects = db_controller.subjects;
        let problems = db_controller.problem;
        let topic_id = await subjects.find({topic : req.params.topic}).select("_id").then(function (data) {
            console.log("-----");
            console.log(data[0]);

            let myProb = problems.find({sub_id : data[0]},"problem_name level points").then(function (value) {
                console.log(value);
                res.status(200);
                res.end(JSON.stringify(value));
            }).catch(function (err) {
                console.log("-----------");
                console.log(err);
            });

        } ).catch(function (err) {
            console.log("---*---");
            console.log(err);
        });
    } catch (err) {
        console.log(err.message);
        res.status(500);
        res.end(err.message);
    }

};



exports.fetch_problem_solving_description = async function (req, res) {

    try {
        console.log();
        let subjects = db_controller.subjects;
        let problems = db_controller.problem;
        let topic_id = await subjects.find({topic : req.params.topic}).select("_id").then(function (data) {
            console.log("-----");
            console.log(data[0]);

            let myProb = problems.find({sub_id : data[0], problem_name : req.params.name}).then(function (value) {
                console.log(value);
                res.status(200);
                res.end(JSON.stringify(value));
            }).catch(function (err) {
                console.log("-----------");
                console.log(err);
            });

        } ).catch(function (err) {
            console.log("---*---");
            console.log(err);
        });
    } catch (err) {
        console.log(err.message);
        res.status(500);
        res.end(err.message);
    }

};