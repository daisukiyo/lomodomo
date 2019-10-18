const Image = require('../../models/image');

module.exports.newImage = function(req, res) {
    var currentUser = req.user;
    res.render('image-form', { currentUser });
    
    // res.send('respond with a resource');
}

module.exports.singleImage = async function(req, res) {
    try {
        var imageObject = await Image.findById(req.params.id)

    }
    catch(err) {
        console.log(err)
    }
    res.render('single-image', { image: imageObject });
    
    // res.send('respond with a resource');
}