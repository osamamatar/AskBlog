var mongoose = require('mongoose'),
    UserinfoSchema = new mongoose.Schema({
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
        image: String,
    })

module.exports = mongoose.model('Userinfo', UserinfoSchema)