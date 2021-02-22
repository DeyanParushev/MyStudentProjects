const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    merchant: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
    },
    report: {
        type: Boolean,
        required: true,
        default: false,
    },
    user: {
        type: String,
        ref: 'User',
        required: true,
    }
});

module.exports = mongoose.model('Expense', expenseSchema);