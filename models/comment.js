var mongoose = require('mongoose')
var commentSchema = mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
        username: String,
    },
    time: Date,
    replay: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'replay',
    }, ],
})

var commentModel = mongoose.model('comment', commentSchema)
module.exports = commentModel