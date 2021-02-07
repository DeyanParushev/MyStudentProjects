const { Router } = require('express');
const router = Router();

const homeController = require('./controllers/homeController');
const cubesController = require('./controllers/cubesController');

router.get('/', homeController);
router.get('/cubes', cubesController);

module.exports = router;
