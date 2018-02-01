
const db_controller=require('../bin/db/db.js');

const pass=require("../passport/signup.js");

const schema=require("../bin/schemas/user-schema.js");
const  util_controller=require('../utils/utils.js');

exports.check_credentials=async function (req,res) {
    try {
        pass(req);
        // let user=db_controller.user;
        // var doc=await util_controller.find_document(user,{ roll_no:req.body.username });
        // var some=await util_controller.check_password(doc.password,req.body.password);
        res.status(200);
        res.end("some");
    }
    catch (err)
    {
        res.status(500);
        res.end(err.message);
    }
}

/*
passport.use('login', new LocalStrategy({
        passReqToCallback : true
    },
    function(req, email, password, done) {
        // check in mongo if a user with username exists or not
        db_controller.user.findOne({ 'email' :  email },
            function(err, user) {
                // In case of any error, return using the done method
                if (err)
                    return done(err);
                // Username does not exist, log error & redirect back
                if (!user){
                    console.log('User Not Found with username '+username);
                    return done(null, false,
                        req.flash('message', 'User Not found.'));
                }
                // User exists but wrong password, log the error
                if (!schema.validPassword(user, password)){
                    console.log('Invalid Password');
                    return done(null, false,
                        req.flash('message', 'Invalid Password'));
                }
                // User and password both match, return user from
                // done method which will be treated like success
                return done(null, user);
            }
        );
    }));*/
