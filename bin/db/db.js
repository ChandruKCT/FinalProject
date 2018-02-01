var Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/FinalProject');
var  mongoose= Mongoose.connection.then(function () {
    console.log("CONNECTED");
}).catch(function () {
    console.log("NOT CONNECTED");
});

let db={};
db.mongoose=mongoose;
db.Mongoose=Mongoose;

const  user=require('../schemas/user-schema.js');

db.user=user.instance(Mongoose);

module.exports=db;



