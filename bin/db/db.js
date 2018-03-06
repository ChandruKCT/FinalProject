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

db.subjects = subjects.instance(Mongoose);
db.problem = problems.instance(Mongoose);

module.exports=db;