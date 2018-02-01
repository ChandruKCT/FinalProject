const LocalStrategy   = require('passport-local').Strategy;
const Userschema          = require('../schemas/user-schema.js');
const db_contoller= require("../db/db.js");
let user=Userschema.instance(db.Mongoose);

