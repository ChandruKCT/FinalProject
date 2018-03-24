const mongoose=require('mongoose');

const schema=mongoose.Schema(
    {
        solved : Date,
        attempted : Date,

        user_id : {
            type : mongoose.Schema.ObjectId,
            ref : 'User-info'
        },

        prob_id : {
            type : mongoose.Schema.ObjectId,
            ref : 'Problems'
        }
    },

    {
        timestamps : true
    },
    {
        collection:'History'
    }
);


exports.instance=function (mon) {
    return mon.model('History',schema);
};