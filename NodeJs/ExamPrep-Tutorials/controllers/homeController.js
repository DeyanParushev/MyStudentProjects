const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.redirect('/courses');
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;