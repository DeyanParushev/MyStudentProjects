const { Router } = require('express');
const isGuest = require('../middlewares/isGuest');
const router = Router();

const hotelsService = require('../services/hotelsService');
const usersService = require('../services/usersService');

router.get('/', async(req, res) => {
    var hotels = await hotelsService.getAll();
    res.render('home', { hotels: hotels });
});

router.get('/details/:hotelId', isGuest, async(req, res) => {
    var hotel = await hotelsService.getOne(req.params.hotelId);
    var bookedUser = hotel.usersBookedARoom.find((user) => user == req.user);
    if (bookedUser) {
        res.locals.hasBeenBooked = true;
    }

    var user = await usersService.getOne(req.user);
    if (hotel.owner === user.username) {
        res.locals.isOwner = true;
    };

    res.render('details', { hotel: hotel });
});

router.get('/add', isGuest, (req, res) => {
    res.render('create');
});

router.post('/add', isGuest, async(req, res) => {
    try {
        await hotelsService.create(req.body, res.locals.username);
        res.redirect('/');
    } catch (exception) {
        res.render('create', { hotel: req.body, error: exception });
    }
});

router.get('/edit/:hotelId', isGuest, async(req, res) => {
    try {
        var hotel = await hotelsService.getOne(req.params.hotelId);
        var user = await usersService.getOne(req.user);

        if (hotel.owner === user.username) {
            res.render('edit', { hotel: hotel });
        } else {
            throw 'You are not an owner';
        }
    } catch (exception) {
        res.redirect('/hotels/', { error: exception.message });
    }
});

router.post('/edit/:hotelId', isGuest, async(req, res) => {
    try {
        var hotel = await hotelsService.getOne(req.params.hotelId);
        var user = await usersService.getOne(req.user);

        if (hotel.owner !== user.username) {
            throw 'You are not an owner';
        }

        await hotelsService.update(req.body);
        res.redirect(`/hotels/details/${hotel._id}`);
        res.end();
    } catch (exception) {
        var hotel = req.body;
        hotel._id = req.params.hotelId;

        res.render('edit', { hotel: hotel, error: exception });
    }
});

router.get('/delete/:hotelId', isGuest, async(req, res) => {
    try {
        var hotel = await hotelsService.getOne(req.params.hotelId);
        var user = await usersService.getOne(req.user);

        if (hotel.owner !== user.username) {
            throw 'You are not an owner';
        }

        await hotelsService.deleteOne(req.params.hotelId);
        res.redirect(`/hotels`);
        res.end();
    } catch (exception) {
        res.redirect('/');
    }
});

router.get('/book/:hotelId', isGuest, async(req, res) => {
    try {
        var hotel = await hotelsService.getOne(req.params.hotelId);
        var bookedUser = hotel.usersBookedARoom.find((user) => user == req.user);
        if (bookedUser) {
            res.locals.hasBeenBooked = true;
            res.redirect(`/hotels/details/${hotel._id}`);
        }

        await hotelsService.addBooking(hotel._id, req.user);
        res.locals.hasBeenBooked = true;
        res.redirect(`/hotels/details/${hotel._id}`);
    } catch (exception) {
        console.log(exception);

        res.redirect('/');
    }

});


module.exports = router;
