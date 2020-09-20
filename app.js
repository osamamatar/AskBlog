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
var commentRoutes = require('./routes/comments'),
    pagesRoutes = require('./routes/pages'),
    authRoutes = require('./routes/index'),
    comRegisRoutes = require('./routes/comRegis'),
    questionRoutes = require('./routes/question'),
    seed = require('./seed/questionseed')
User = require('./models/user')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

mongoose.connect('mongodb://localhost/ask_blog')

//====================================

//======================
//PASSPORT CONFIGRATION
//======================

app.use(
    require('express-session')({
        secret: 'i love to code',
        resave: false,
        saveUninitialized: false,
    }),
)
app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//=======================

//middalware for passing currentUser for every template to using it in header

//============================================================================

//seed()

app.use(function(req, res, next) {
    res.locals.currentUser = req.user

    next()
})

app.use(commentRoutes)
app.use(pagesRoutes)
app.use(authRoutes)
app.use(comRegisRoutes)
app.use(questionRoutes)

app.listen(port, () => console.log(`server runing ....!`))