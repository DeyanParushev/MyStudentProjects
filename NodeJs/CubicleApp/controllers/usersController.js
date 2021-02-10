const { Router } = require('express');
const usersService = require('../services/usersService');
const { COOKIE_NAME } = require('../config/config').development;
const isGuest = require('../middlewares/isGuest');
const isApplicationUser = require('../middlewares/isApplicationUser');
const router = Router();

router.get('/login', isGuest, (req, res) => {
    res.render('loginPage', { title: 'Login' });
});

router.post('/login', isGuest, async(req, res) => {
    try {
        var token = await usersService.login(req.body);
        res.cookie(COOKIE_NAME, token, { httpOnly: true });
        console.log(token);
        res.redirect('/');
    } catch (exception) {
        res.render('loginPage', { error: exception, title: 'Login' });
    }
});

router.get('/register', isGuest, (req, res) => {
    res.render('registerPage', { title: 'Register' })
});

router.post('/register', isGuest, async(req, res) => {
    try {
        await usersService.register(req.body);
        res.redirect('/users/login');
    } catch (exception) {
        res.render('registerPage', { error: exception, title: 'Register' });
    }
});

router.get('/logout', isApplicationUser, (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/');
});

module.exports = router;