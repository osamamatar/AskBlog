const express = require('express')
const app = express()
const port = 3000
var mongoose = require('mongoose')
var jQuery = require('jquery')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/register', (req, res) => {
    res.render('register')
})
app.get('/profile', (req, res) => {
    res.render('home/profile', { jQuery: jQuery })
})

app.get('/', (req, res) => {
    res.render('landing')
})

app.listen(port, () => console.log(`Example app listening on port port!`))