const Post = require('../../models/image');

module.exports.newImage = function(req, res) {
    res.render('image-form');
    
    // res.send('respond with a resource');
}