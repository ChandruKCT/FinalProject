const mongoose=require('mongoose');

const  user_schema=require('../bin/schemas/user-schema.js');
const db_controller=require('../bin/db/db.js');
const  util_controller=require('../utils/utils.js');

exports.check_credentials=async function (req,res) {
    try {
        var connection=await db_controller.establish_connection();
        //console.log(connection);
        var user=await mongoose.model('users',user_schema.schema);
        var doc=await util_controller.find_document(user,{ roll__no:req.body.username });
        var some=await util_controller.check_password(doc.password,req.body.password);
        res.status(200);
        res.end(some);
    }  catch (err)  {
        console.log("Caught");
        res.status(500);
        res.end(err.message);
    }
}

