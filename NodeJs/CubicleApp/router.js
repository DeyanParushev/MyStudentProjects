const { Router } = require('express');
const router = Router();

const homeController = require('./controllers/homeController');
const cubesController = require('./controllers/cubesController');
const accessoriesController = require('./controllers/accessoriesController');

router.use('/', homeController);
router.use('/cubes', cubesController);
router.use('/accessories', accessoriesController);

module.exports = router;