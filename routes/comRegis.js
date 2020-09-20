var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    multer = require('multer'),
    upload = multer({ dest: 'uploads/' }),
    userInfo = require('../models/userInfo')

router.get('/comRegis/:id', (req, res) => {
    res.render('home/comRegis', { currentUser: req.user })
})

router.post('/comRegis/:id', function(req, res) {
    let info = {
        name: req.body.name,
        email: req.body.email,
        bio: req.body.bio,
        avatar: req.body.avatar,
        Birthday: req.body.Birthday,
    }

    userInfo.create(info, (err, newUser) => {
        if (err) {
            console.log('err')
            res.redirect('back')
        } else {
            newUser.author.id = req.user._id
            newUser.author.username = req.user.username
            newUser.save()
            res.redirect('/profile/' + req.user._id)
        }
    })
})

module.exports = router