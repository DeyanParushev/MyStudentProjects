const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        tags: { type: [String], index: true },
    },
    password: {
        type: String,
        required: true,
    },
    courses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course',
    }],
});

module.exports = mongoose.model('User', userSchema);