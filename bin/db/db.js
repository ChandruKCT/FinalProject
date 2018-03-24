let Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/Problems');

let mongoose = Mongoose.connection.then(function () {
    console.log("CONNECTED");
}).catch(function () {
    console.log("NOT CONNECTED");
});

let db={};
db.mongoose=mongoose;
db.Mongoose=Mongoose;

const subjects = require('../schemas/subject-schema');
const problems = require('../schemas/problem-schema');
const user_info = require('../schemas/user-info-schema');
const points = require('../schemas/points-scheme');
const history = require("../schemas/history-schema");

db.subjects = subjects.instance(Mongoose);
db.problem = problems.instance(Mongoose);
db.user_info = user_info.instance(Mongoose);
db.points = points.instance(Mongoose);
db.history = history.instance(Mongoose);


module.exports=db;