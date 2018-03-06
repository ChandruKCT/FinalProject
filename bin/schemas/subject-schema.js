const mongoose=require('mongoose');

const schema=mongoose.Schema({
    subject:String,
    topic:String
},
{
    collection:'Subjects'
});


exports.instance=function (mon) {
    return mon.model('Subjects',schema);
};