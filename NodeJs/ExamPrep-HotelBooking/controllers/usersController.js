const { Router } = require('express');
const usersService = require('../services/usersService');
const { COOKIE_NAME } = require('../config/config').development;
const isApplicationUser = require('../middlewares/isAppUser');
const isGuest = require('../middlewares/isGuest');
const { body } = require('express-validator');
const router = Router();

router.get('/login', isApplicationUser, (req, res) => {
    res.render('login', { title: 'Login' });
});

router.post(
    '/login',
    isApplicationUser,
    async(req, res) => {
        try {
            var token = await usersService.login(req.body);
            res.cookie(COOKIE_NAME, token, { httpOnly: true });
            res.redirect('/');
        } catch (exception) {
            res.render('login', { error: exception, title: 'Login' });
        }
    });

router.get('/details/:userId', isGuest, async(req, res) => {
    if (req.params.userId !== res.locals.userId) {
        res.redirect('/');
    }

    var user = await usersService.getOne(req.params.userId);
    res.render('profile', { details: user });
});

router.get('/register', isApplicationUser, (req, res) => {
    res.render('register', { title: 'Register' })
});

router.post('/register',
    isApplicationUser,
    body('email').normalizeEmail().isEmail(),
    async(req, res) => {
        try {
            await usersService.register(req.body);
            res.redirect('/users/login');
        } catch (exception) {
            res.render('register', { error: exception, title: 'Register' });
        }
    });

router.get('/logout', isGuest, (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/');
});

module.exports = router;