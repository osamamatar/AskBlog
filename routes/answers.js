var express = require('express')
var router = express.Router()

router.get('/profile', (req, res) => {
    res.render('home/profile')
})

router.get('/home', (req, res) => {
    res.send('GET request to the homepage')
})

module.exports = router