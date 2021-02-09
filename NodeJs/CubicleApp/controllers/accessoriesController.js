const { Router } = require('express');
const router = Router();
const accessoriesService = require('../services/accessoriesService');

router.get('/', (req, res) => {
    accessoriesService.getAll(req.query)
        .then((accessories) => {
            res.render('accessories', { accessories: accessories, title: 'Browse' });
        })
        .catch(() => res.status(500).end());
});

router.get('/create', (req, res) => {
    res.render('createAccessory', { title: 'Create' });
});

router.post('/create', (req, res) => {
    accessoriesService.create(req.body)
        .then((result) => {
            res.redirect('/accessories');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).end()
        });
});

module.exports = router;