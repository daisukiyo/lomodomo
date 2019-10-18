module.exports.newUser = function (req, res) {
    // SIGN UP FORM
    res.render('signup');
}

module.exports.userLogout = function (req, res) {
    res.clearCookie('nToken');
    res.redirect('/');
}

module.exports.userLogin = function (req, res) {
    var currentUser = req.user;
    res.render('login', { currentUser })
}