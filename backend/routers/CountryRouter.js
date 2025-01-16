const express = require('express');

const countryController = require('../controllers/CountryController.js');

const countryRouter = express.Router();

//Routes

countryRouter.route('/').get(countryController.getAll);
countryRouter.route('/country/:code').get(countryController.getByCode);
countryRouter.route('/flags').get(countryController.getFlags);

module.exports = countryRouter;