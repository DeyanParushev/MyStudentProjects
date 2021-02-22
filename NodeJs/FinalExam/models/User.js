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
    amount: {
        type: Number,
        required: true,
        default: 0,
    },
    expenses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Expense',
    }]
});

module.exports = mongoose.model('User', userSchema);