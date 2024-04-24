const routes = require('express').Router();
const controller = require('../controllers/');

routes.get('/', controller.displayHome);

module.exports = routes;