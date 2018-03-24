const mongoose=require('mongoose');

const schema=mongoose.Schema({
    name : String,
    roll_no : String,
    department : String,
    dob : String,
    e_mail : String,
    phone : String
    },
    {
        collection:'User-info'
    });


exports.instance=function (mon) {
    return mon.model('User-info',schema);
};