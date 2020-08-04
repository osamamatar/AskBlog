var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    multer = require('multer'),
    upload = multer({ dest: 'uploads/' }),
    userInfo = require('../models/userinfo')

router.use(
    require('multer')({
        dest: './uploads/',
        rename: function(fieldname, filename) {
            return filename
        },
    }),
)

router.get('/comRegis', (req, res) => {
    res.render('home/comRegis')
})
router.post('/comRegis', upload.single('avatar'), function(req, res) {
    userInfo.create(req.body.userinfo, (err, user) => {
            if (err) {
                console.log(' error')
                console.log(err)
            } else {
                user.author.id = req.user._id
                user.author.username = req.user.username
                console.log(req.files)
                user.avatar.data = fs.readFileSync(req.files.avatar.path)
                user.avatar.contentType = 'image/png'
                user.save()
                res.redirect('/home/profile')
                    //console.log(camp);
            }
        })
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any
})

module.exports = router