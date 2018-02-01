const mongoose=require('mongoose');
const bcrypt=require('bcrypt-nodejs');
const schema=mongoose.Schema({
    password:String,
    email:String
    },
    {
        collection:'Users'
    });

exports.instance=function (mon) {
    return mon.model('User',schema);
}

schema.methods.generateHash=function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

schema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


