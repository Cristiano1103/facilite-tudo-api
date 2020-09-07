const api = require('./api');
const routes = require('express').Router();

routes.use('/api/v1', api);

module.exports = routes;