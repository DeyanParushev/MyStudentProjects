const express = require('express')
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars')
const authentication = require('../middlewares/authentication');
const isApplicationUser = require('../middlewares/isApplicationUser');

module.exports = (app) => {
    app.engine('hbs', handlebars({
        extname: 'hbs'
    }))
    app.set('view engine', 'hbs')

    app.use(express.static('static'))
    app.use(express.urlencoded({
        extended: true
    }))

    app.use(cookieParser());
    app.use(authentication());
}