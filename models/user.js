var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose'),
    userSchema = mongoose.Schema({
        username: String,
        password: String,
    })

userSchema.plugin(passportLocalMongoose)
var userModel = new mongoose.model('user', userSchema)

module.exports = userModel