const mongoose=require('mongoose');

exports.schema=mongoose.Schema({
    name: String,
    roll_no:String,
    dob:String,
    gender:String,
    department:String,
    password:String,
    display_picture:String,
    email:String,
    phone:String
    },
    {
        collection:'users'
});