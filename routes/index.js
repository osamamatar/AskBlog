var express = require('express')
var router = express.Router()
var User = require('../models/user')
var passport = require('passport')

router.get('/', (req, res) => {
    res.render('landing')
})

//login handling
//==========================================
router.get('/login', (req, res) => {
    res.render('login')
})
router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/login',
    }),
    function(req, res) {},
)

//log out handling
//===========================================
router.get('/logout', function(req, res) {
    req.logout()
    res.redirect('/')
})

//registertion handling
//=============================================

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
                res.redirect('/comRegis')
            })
        },
    )
})

//==============================================
module.exports = router