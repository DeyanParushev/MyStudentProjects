const Expense = require('../models/Expense');
const User = require('../models/User');

const categories = ['advertising', 'benefits', 'car', 'equipment', 'fees', 'home-office', 'insurance',
    'interest', 'labor', 'maintenance', 'materials', 'meals-and-entertainment', 'office-supplies',
    'other', 'professional-services', 'rent', 'taxes', 'travel', 'utilities'
];
async function getUserExpenses(userId) {
    var expenses = await Expense.find({ user: userId }).lean();
    return expenses;
}

async function create(expense, userId) {
    if (expense.merchant.length < 4) {
        throw 'Merchant must be at least 4 letters long.'
    }

    if (expense.total < 0) {
        throw 'The total should be a positive number.'
    }

    if (!categories.includes(expense.category)) {
        throw 'Category does not exist';
    }

    if (expense.description.length < 3 || expense.description.length > 30) {
        throw 'Description must be between 3 and 30 characters long.'
    }

    var reportValue = false;

    if (expense.report === 'on') {
        reportValue = true;
    }

    var expense = await Expense.create({...expense, user: userId, report: reportValue })
    var user = await User.findById(userId);
    user.expenses.push(expense._id);
    await user.save();
}

async function report(expenseId) {
    var expense = await Expense.findById(expenseId).lean();
    return expense;
}

async function deleteOne(id) {
    await Expense.findByIdAndDelete(id);
}

module.exports = {
    getUserExpenses,
    create,
    deleteOne,
    report,
}