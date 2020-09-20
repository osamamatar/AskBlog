var mongoose = require('mongoose')

var questionSchema = new mongoose.Schema({
    text: String,
    answer: String,
    sender: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
        username: String,
    },
    reciever: {
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

    timeOfSend: { type: Date, default: Date.now },
    timeOfAns: Date,
})
var answerModel = mongoose.model('question', questionSchema)
module.exports = answerModel