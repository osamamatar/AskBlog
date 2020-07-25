var mongoose = require('mongoose')

var answerSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
        username: String,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment',
    }, ],

    time: Date,
})
var answerModel = mongoose.model('answer', answerSchema)
module.exports = answerModel