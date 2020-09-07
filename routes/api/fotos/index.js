const routes = require('express').Router({ mergeParams: true });
const record = require('../../../controllers/fotos/record');

routes.post('/', record);

module.exports = routes;
