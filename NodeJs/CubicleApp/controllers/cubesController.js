const { Router } = require('express');
const router = Router();

router.get('/cubes', (req, res) => {
    res.render('index');
});

router.get('/create', (req, res) => {
    res.render('create');
});

module.exports = router;