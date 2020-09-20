var mongoose = require('mongoose'),
    userInfoSchema = mongoose.Schema({
        author: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
            },
            username: String,
        },
        name: String,
        email: String,
        bio: String,
        avatar: String,
        Birthday: Date,

        friends: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'user' }],
    })

var userInfoModel = new mongoose.model('userInfo', userInfoSchema)

module.exports = userInfoModel