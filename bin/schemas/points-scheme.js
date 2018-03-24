const mongoose=require('mongoose');

const schema=mongoose.Schema(
    {
        is_solved : Number,
        is_attempted : Number,
        point_scored : Number,
        /*sub_id : {
            type : mongoose.Schema.ObjectId,
            ref : 'Subjects'
        },*/

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
        collection:'Points'
    }
);



exports.instance=function (mon) {
    return mon.model('Points',schema);
};