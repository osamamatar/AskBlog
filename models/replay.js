var mongoose = require('mongoose')
var replaySchema = mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
        username: String,
    },

    time: Date,
})

var replayModel = mongoose.model('replay', replaySchema)
module.exports = replayModel