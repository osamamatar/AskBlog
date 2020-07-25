var mongoose = require('mongoose')
var likeSchema = mongoose.Schema({
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
        username: String,
    },

    time: Date,
})

var likeModel = mongoose.model('like', likeSchema)
module.exports = likeModel