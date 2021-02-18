const { Router } = require('express');
const router = Router();

const homeController = require('./controllers/homeController');
const usersController = require('./controllers/usersController');
const hotelsController = require('./controllers/hotelsController');

router.use('/', homeController);
router.use('/users', usersController);
router.use('/hotels', hotelsController);

module.exports = router;