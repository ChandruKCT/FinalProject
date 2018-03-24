const db_controller=require('../bin/db/db.js');
let mongoose = require('mongoose');

exports.fetch_history_of_user_of_problem=async function (req,res) {

    try {
        let history = db_controller.history;
        console.log(req.params.prob_id);
        let series = await history.find({
            user_id: req.params.user_id,
            prob_id: req.params.prob_id
        }).then(function (data) {
            console.log("suc");
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


exports.post_history_of_user_of_problem=async function (req,res) {

    try {

        let solved = req.body.solved;
        console.log(req.body.solved);
        let history = db_controller.history;

        if (solved === 1) {

            await history.findOneAndUpdate(
                {
                    user_id: req.body.user_id,
                    prob_id: req.body.prob_id
                },
                {
                    $set: {
                        user_id: req.body.user_id,
                        prob_id: req.body.prob_id,
                        solved: Date(),
                        attempted: Date()
                    }
                }
                ,
                {upsert: true, new: true, runValidators: true},
                function (err, doc) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.status(200);
                        res.json(doc);
                    }
                }
            )

        } else {

            await history.findOneAndUpdate(
                {
                    user_id: req.params.user_id,
                    prob_id: req.params.prob_id
                },
                {
                    $set: {
                        user_id: req.params.user_id,
                        prob_id: req.params.prob_id,
                        solved: null,
                        attempted: Date()
                    }
                },
                {upsert: true, new: true, runValidators: true},
                function (err, doc) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.status(200);
                        res.json(doc);
                    }
                }
            )
        }
    } catch (err) {
        console.log(err.message);
        res.status(500);
        res.end(err.message);
    }
};
