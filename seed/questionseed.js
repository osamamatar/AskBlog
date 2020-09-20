var mongoose = require('mongoose'),
    question = require('../models/question')

module.exports = function() {
    let que = new question({
        text: 'how are you',
        answer: ' i am fine thanx alot',
        sender: { id: '5f2b8d5d00d77a57566d2695' },
        reciever: { id: '5f2ecb1ff42ec910f9b4c4c1' },
        timeOfAns: Date.now(),
    })
    que.save((err) => {
        if (!err) {
            console.log(' question recoreded')
        } else {
            console.log('error')
        }
    })
}