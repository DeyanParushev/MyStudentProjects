const mongoose = require('mongoose');
const config = require('./config');
const env = process.env.NODE_ENV.trim();

module.exports = (app) => {
    mongoose.connect(config[env].DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', console.log.bind(console, 'Db Connected!'));
}