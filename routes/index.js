var express = require('express');
var router = express.Router();
const Image = require('../models/image')

/* GET home page. */
router.get('/', async function(req, res, next) {
  // res.render('index', { title: 'Lomodomo' });

  try {
    var currentUser = req.user;
    Image.find({})
      .then(images => {
        res.render('images-index', { images, currentUser });
      })
  }
  catch(error) {
    console.log(error.message);
    res.send(500);
  }
  
});

router.get('/about', function(req, res) {
  var currentUser = req.user;
  res.render('about', { currentUser })
})

module.exports = router;