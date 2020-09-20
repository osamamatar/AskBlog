var express = require('express')
var router = express.Router()
var middlware = require('../middlware/index'),
    question = require('../models/question'),
    User = require('../models/user')
const userModel = require('../models/user')

router.get('/profile/:id', middlware.isLogedIn, (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            console.log('cnat find user')
        } else {
            res.render('home/profile', { user: user })
        }
    })
})

router.get('/home', middlware.isLogedIn, (req, res) => {
    question
        .find({})
        .populate('reciever')
        .exec((err, que) => {
            if (err || !que) {
                console.log('error happend', err)
            } else {
                res.render('home/home', { questions: que })
            }
        })
})

module.exports = router