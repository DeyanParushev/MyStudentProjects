const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET, SALT_ROUNDS } = require('../config/config').development;

async function register(data) {
    if (data.password !== data.confirmPassword) {
        throw 'Password and Confirm Password must match.';
    };

    var userExists = await User.exists({ username: data.username });
    if (userExists) {
        throw 'Username exists';
    };

    userExists = await User.exists({ email: data.email });
    if (userExists) {
        throw 'Email exists';
    };

    var username = data.username;
    var hash = await bcrypt.hash(data.password, SALT_ROUNDS);
    var user = new User({ username, password: hash, email: data.email });

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

    var token = jwt.sign({ userId: user._id, username: user.username }, SECRET);
    return token;
};

async function getOne(id) {
    var user = await User.findById(id).populate('bookedHotels').lean();
    return user;
}

module.exports = {
    register,
    login,
    getOne,
}