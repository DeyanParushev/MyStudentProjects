const env = process.env.NODE_ENV || 'development';
const config = require('./config/config');
const app = require('express')();
const router = require('./router');

require('./config/express')(app);
require('./config/mongoose')(app);

app.use(router);

app.listen(config.development.port, () => console.log(`Listening on port ${config.development.port}! Now its up to you...`));