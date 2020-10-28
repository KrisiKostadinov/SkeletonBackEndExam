const express = require('express');
const { PORT } = require('./config/config');

const app = express();

require('./config/express')(express, app);
require('./config/db');
require('./config/routes')(app);

app.listen(PORT, () => {
    console.log('Server listening on port: ' + PORT);
});