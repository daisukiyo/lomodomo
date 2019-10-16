var express = require('express');
var router = express.Router();
var controller = require('../controllers/image');

/* GET users listing. */
router.get('/new', controller.get.newImage);

// POST to image route
router.post('/', controller.post.postImage) 

  
module.exports = router;
  