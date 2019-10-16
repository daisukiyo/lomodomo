const Image = require('../../models/image');

// anonymous function
module.exports.postImage = async (req, res) => {
    try {
        await Image.create(req.body);
        console.log(req.body);
        res.send(200);
    }
    catch(error) {
        console.log(error);
        res.send(500); 
    }
}