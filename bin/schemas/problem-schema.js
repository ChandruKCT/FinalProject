const mongoose=require('mongoose');

const schema=mongoose.Schema({
    problem_name : String,
    problem_description : String,
    sample_input : String,
    sample_output : String,
    explanation : String,
    level : String,
    points : Number,
    sub_id : {
        type : mongoose.Schema.ObjectId,
        ref : 'Subjects'
    }

    },{
    timestamps : true
    },
    {
        collection:'Problems'
});



exports.instance=function (mon) {
    return mon.model('Problems',schema);
};