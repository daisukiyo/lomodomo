var express = require('express');
var router = express.Router();
var controller = require('../controllers/auth');

router.get('/signup', controller.get.newUser);

router.post('/', controller.post.postUser)
module.exports = router;
