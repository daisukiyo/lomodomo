const User = require("../../models/user");
const jwt = require('jsonwebtoken');

module.exports.postUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.create(req.body);
        var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
        res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
        res.send(200);
    }
    catch(error) {
        console.log(error);
        res.send(500);
    }
}