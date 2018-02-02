var mongoose = require('mongoose');

exports.establish_connection=function () {
    return new Promise(function (resolve,reject) {
        mongoose.connect('mongodb://localhost/FinalProject');
        var db = mongoose.connection.then(function () {
            console.log("CONNECTED!");
            resolve(db);
        }).catch(function () {
            console.log("NOT CONNECTED");
            reject(new Error("Database not connected"));
        });

    })
};