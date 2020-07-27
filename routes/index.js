var express = require('express')
var router = express.Router()
var User = require('../models/user')
var passport = require('passport')

router.get('/', (req, res) => {
    res.render('landing')
})

router.get('/login', (req, res) => {
    res.render('login')
})

//==============================================

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', function(req, res) {
    User.register(
        new User({ username: req.body.username }),
        req.body.password,
        function(err, user) {
            if (err) {
                return res.render('register')
            }
            passport.authenticate('local')(req, res, function() {
                res.redirect('/')
            })
        },
    )
})

//==============================================
module.exports = router