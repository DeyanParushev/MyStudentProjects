const { Router } = require('express');
const usersService = require('../services/usersService');
const expensesService = require('../services/expensesService');
const { COOKIE_NAME } = require('../config/config').development;
const isGuest = require('../middlewares/isGuest');
const isApplicationUser = require('../middlewares/isAppUser');
const router = Router();

router.get('/login', isApplicationUser, (req, res) => {
    res.render('login', { title: 'Login' });
});

router.post('/login', isApplicationUser, async(req, res) => {
    try {
        var token = await usersService.login(req.body);
        res.cookie(COOKIE_NAME, token, { httpOnly: true });
        res.redirect('/expenses');
    } catch (exception) {
        res.render('login', { error: exception, title: 'Login' });
    }
});

router.get('/register', isApplicationUser, (req, res) => {
    res.render('register', { title: 'Register' })
});

router.post('/register', isApplicationUser, async(req, res) => {
    try {
        var user = await usersService.register(req.body);
        var token = await usersService.login(user);
        res.cookie(COOKIE_NAME, token, { httpOnly: true });
        res.redirect('/expenses');
    } catch (exception) {
        console.log(exception);
        res.render('register', { error: exception, title: 'Register' });
    }
});

router.post('/refill', isGuest, async(req, res) => {
    try {
        await usersService.refill(req.body, req.user);
        res.redirect('/expenses');
    } catch (exception) {
        console.log(exception);
        var expenses = await expensesService.getUserExpenses(req.user);
        res.render('expenses', { expenses: expenses, error: exception });
    }
});

router.get('/logout', isGuest, (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/');
});

router.get('/details/:userId', isGuest, async(req, res) => {
    var user = await usersService.getUser(req.user);
    res.render('account-info', { user: user, title: 'Account Info' });
})

module.exports = router;