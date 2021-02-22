const { Router } = require('express');
const router = Router();

const homeController = require('./controllers/homeController');
const usersController = require('./controllers/usersController');
const expensesController = require('./controllers/expensesController');

router.use('/', homeController);
router.use('/users', usersController);
router.use('/expenses', expensesController);
router.use('*', (req, res) => {
    res.render('404');
})

module.exports = router;