const mongoose = require('mongoose');
const { DB_URL } = require('../config/config');

mongoose.connect(DB_URL,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
    console.log('Connected to db');
});