const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET, SALT_ROUNDS } = require('../config/config').development;

async function register(data) {
    if (data.password !== data.repeatPassword) {
        throw 'Password and Confirm Password must match.';
    };

    var userExists = await User.exists({ username: data.username });
    if (userExists) {
        throw 'Username exists';
    };

    var username = data.username;
    var hash = await bcrypt.hash(data.password, SALT_ROUNDS);
    var user = new User({ username, password: hash });

    return await user.save();
};

async function login(data) {
    var user = await User.findOne({ username: data.username });
    if (!user) {
        throw 'Wrong username or password.';
    }

    var isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
        throw 'Wrong username or password.';
    }

    var token = jwt.sign({ userId: user._id }, SECRET);
    return token;
};

module.exports = {
    register,
    login,
}