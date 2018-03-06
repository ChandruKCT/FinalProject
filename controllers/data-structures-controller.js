const mongoose=require('mongoose');

const  user_schema=require('../bin/schemas/subject-schema');
const db_controller=require('../bin/db/db.js');
const util_controller = require('../util/fetch_problems');

exports.fetch_data_structure_problems=async function (req,res) {

    util_controller.fetch_problems(req, res, "Data structures");

};


exports.post_data_structure_problems = async function (req, res) {
};
