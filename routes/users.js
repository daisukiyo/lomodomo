var express = require('express');
var router = express.Router();
var controller = require('../controllers/auth');

router.get('/signup', controller.get.newUser);

router.get('/logout', controller.get.userLogout)

router.get('/login', controller.get.userLogin)

router.post('/login', controller.post.userAuthenticate)

router.post('/', controller.post.postUser)

module.exports = router;
