const { home } = require('../controllers');

module.exports = (app) => {
    app.use('/', home.get.home);
}