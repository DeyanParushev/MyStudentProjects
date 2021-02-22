const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    if (req.user) {
        res.redirect('/expenses');
    } else {
        res.render('home');
    }
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;