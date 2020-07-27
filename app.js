const express = require('express')
const app = express()
const port = 3000
var mongoose = require('mongoose')

var passport = require('passport')
var localStrategy = require('passport-local')
var methodOverride = require('method-override')
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect('mongodb://localhost/ask_blog')
var commentRoutes = require('./routes/comments'),
    answerRoutes = require('./routes/answers'),
    authRoutes = require('./routes/index')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.use(commentRoutes)
app.use(answerRoutes)
app.use(authRoutes)

app.listen(port, () => console.log(`server runing ....!`))