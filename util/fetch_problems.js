const mongoose=require('mongoose');

const  user_schema=require('../bin/schemas/subject-schema');
const db_controller=require('../bin/db/db.js');


exports.fetch_problems = async function (req, res, heading) {

    try {
        let subjects = db_controller.subjects;
        let myProb = await subjects.find({subject : heading}).then(function (data) {
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