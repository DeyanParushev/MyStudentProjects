const { Router } = require('express');
const router = Router();
const expensesService = require('../services/expensesService');
const isGuest = require('../middlewares/isGuest');

router.get('/', isGuest, async(req, res) => {
    try {
        var expenses = await expensesService.getUserExpenses(req.user);
        res.render('expenses', { expenses: expenses, title: 'Expenses' });
    } catch (exception) {
        res.render('404', { error: exception })
    }
});

router.get('/create', isGuest, async(req, res) => {
    res.render('new-expense', { title: 'Create Expense' });
})

router.post('/create', isGuest, async(req, res) => {
    try {
        await expensesService.create(req.body, req.user);
        res.redirect('/');
    } catch (exception) {
        res.render('new-expense', { expense: req.body, error: exception, title: 'Expense Create' })
    }
})

router.get('/report/:expenseId', isGuest, async(req, res) => {
    try {
        var expense = await expensesService.report(req.params.expenseId);
        res.render('report', { expense: expense, title: 'Expense Details' });
    } catch (exception) {
        res.render('404', { error: exception });
    }

    return
});

router.get('/delete/:expenseId', isGuest, async(req, res) => {
    try {
        await expensesService.deleteOne(req.params.expenseId);
        res.redirect('/expenses');
    } catch (exception) {
        res.render('404', { error: exception });
    }
})

module.exports = router;