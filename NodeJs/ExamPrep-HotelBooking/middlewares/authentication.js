const { COOKIE_NAME, SECRET } = require('../config/config').development;
const jwt = require('jsonwebtoken');

module.exports = function() {
    return (req, res, next) => {
        var token = req.cookies[COOKIE_NAME];
        if (token) {
            jwt.verify(token, SECRET, (err, decoded) => {
                if (err) {
                    res.clearCookie(COOKIE_NAME);
                } else {
                    req.user = decoded.userId;
                    res.locals.userId = decoded.userId;
                    res.locals.username = decoded.username;
                    res.locals.isAuthenticated = true;
                }
            });
        }

        next();
    };
}