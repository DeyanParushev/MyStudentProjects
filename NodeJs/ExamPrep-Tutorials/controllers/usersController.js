const { Router } = require('express');
const usersService = require('../services/usersService');
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
        res.redirect('/');
    } catch (exception) {
        res.render('login', { error: exception, title: 'Login' });
    }
});

router.get('/register', isApplicationUser, (req, res) => {
    res.render('register', { title: 'Register' })
});

router.post('/register', isApplicationUser, async(req, res) => {
    try {
        await usersService.register(req.body);
        res.redirect('/users/login');
    } catch (exception) {
        console.log(exception);
        res.render('register', { error: exception, title: 'Register' });
    }
});

router.get('/logout', isGuest, (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/');
});

module.exports = router;