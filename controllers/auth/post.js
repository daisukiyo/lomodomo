const User = require("../../models/user");

module.exports.postUser = async (req, res) => {
    try {
        await User.create(req.body);
        console.log(req.body);
        res.send(200);
    }
    catch(error) {
        console.log(error);
        res.send(500);
    }
}