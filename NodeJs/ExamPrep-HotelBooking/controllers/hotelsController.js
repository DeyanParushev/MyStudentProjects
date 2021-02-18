const { Router } = require('express');
const isGuest = require('../middlewares/isGuest');
const router = Router();

const hotelsService = require('../services/hotelsService');

router.get('/', async(req, res) => {
    var hotels = await hotelsService.getAll();
    res.render('home', { hotels: hotels });
});

router.get('/details/:hotelId', isGuest, async(req, res) => {
    var hotel = await hotelsService.getOne(req.params.hotelId);
    res.render('details', { hotel: hotel });
});

router.get('/add', isGuest, (req, res) => {
    res.render('create');
});

router.post('/add', isGuest, async(req, res) => {
    try {
        await hotelsService.create(req.body, res.locals.userId);
        res.redirect('/');
    } catch (exception) {
        res.render('create', { hotel: req.body, error: exception });
    }
});


module.exports = router;