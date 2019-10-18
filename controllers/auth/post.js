const User = require("../../models/user");
const jwt = require('jsonwebtoken');

module.exports.postUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.create(req.body);
        var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
        res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
        res.render('images-index');
    }
    catch(error) {
        console.log(error);
        res.send(500);
    }
}

module.exports.userAuthenticate = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        // make user the result of the successful promise
        const user = await User.findOne({ username }, "username password")

        if(!user) {
            return res.status(401).send({ message: 'wrong username or password' });
        }

        // promisfy in the future
        user.comparePassword(password, (err, isMatch) => {
            if(!isMatch) {
                return res.status(401).send({ message: "Wrong Username or password" }); 
            }
            const token = jwt.sign({ _id: user._id, username: user.username }, process.env.SECRET, {
                expiresIn: "60 days"
            });
        
            res.cookie("nToken", token, { maxAge: 900000, httpOnly: true });
            res.redirect("/");
        })
    }
    catch(err) {
        console.log(err);
    }
}