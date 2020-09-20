var express = require('express')
var router = express.Router()
var middlware = require('../middlware/index')
var User = require('../models/user')
var question = require('../models/question')

//show Q page

router.get('/questions', middlware.isLogedIn, (req, res) => {
    question.find({}, (err, ques) => {
        if (err) {
            res.redirect('back')
        } else {
            res.render('home/question', { questions: ques })
        }
    })
})

//create new question
router.post('/questions/:reciever_id/new', function(req, res) {
    let que = new question({
        text: req.body.questiontext,
        // answer: ' i am fine thanx alot',
        sender: { id: req.user._id },
        reciever: { id: req.params.reciever_id },
    })
    que.save((err) => {
            if (!err) {
                console.log(' question recoreded')
                res.redirect('/profile/' + req.params.reciever_id)
            } else {
                console.log('error', err)
                res.redirect('back')
            }
        })
        //=========================

    // User.findById(req.params.reciever_id, function(err, User) {
    //     if (err) {
    //         console.log('error occur')
    //         res.redirect('back')
    //     } else {
    //         question.create({ text: req.body.questiontext }, function(
    //             err,
    //             question,
    //         ) {
    //             if (err) {
    //                 console.log('error happend')
    //                 res.redirect('back')
    //             } else {
    //                 question.sender.id = req.user._id
    //                 question.sender.username = req.user.username
    //                 question.reciever.id = req.params.reciever_id
    //                 question.save()
    //                 User.question.push(question)
    //                 User.save()
    //             }
    //         })
    //     }
    // })
})

module.exports = router