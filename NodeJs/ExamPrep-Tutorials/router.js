const { Router } = require('express');
const router = Router();

const homeController = require('./controllers/homeController');
const usersController = require('./controllers/usersController');
const coursesController = require('./controllers/coursesController');

router.use('/', homeController);
router.use('/users', usersController);
router.use('/courses', coursesController);

module.exports = router;