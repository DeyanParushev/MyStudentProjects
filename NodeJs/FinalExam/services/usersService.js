const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET, SALT_ROUNDS } = require('../config/config').development;

async function register(data) {
    var amountNumber = parseInt(data.amount);
    if (data.password !== data.repeatPassword) {
        throw 'Password and Confirm Password must match.';
    };

    var userExists = await User.exists({ username: data.username });
    if (userExists) {
        throw 'Username exists';
    };

    if (data.username.length < 4) {
        throw 'Username must be longer than 4 characters.'
    }

    if (data.password.length < 4) {
        throw 'Password must be longer than 4 characters.'
    }

    if (!data.username.match(/[A-Za-z0-9]+/)) {
        throw 'Username must consist of only english letters and digits.'
    }

    if (amountNumber < 0) {
        throw 'Starting amount must be more than 0.'
    }

    var username = data.username;
    var hash = await bcrypt.hash(data.password, SALT_ROUNDS);
    var user = new User({ username, password: hash, amount: amountNumber });
    await user.save();
    var newUser = {
        username: user.username,
        password: data.password,
    };
    return newUser;
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

async function refill(amount, userId) {
    var amountNumber = parseInt(amount.amount);
    if (amountNumber <= 0) {
        throw 'Refill amount cannot be less or equal to 0.';
    }

    var user = await User.findById(userId);
    user.amount += amountNumber;
    await user.save();
}

async function getUser(userId) {
    var user = await User.findById(userId).populate('expenses').lean();

    var userInfo = {};
    userInfo.totalAmount = 0;
    userInfo.merches = [];
    user.expenses.forEach(element => {
        userInfo.totalAmount += element.total;

        if (!userInfo.merches.includes(element.merchant)) {
            userInfo.merches.push(element.merchant);
        }
    });

    userInfo.funds = user.amount;
    return userInfo;
}

module.exports = {
    register,
    login,
    refill,
    getUser,
}