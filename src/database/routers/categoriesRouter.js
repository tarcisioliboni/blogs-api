const { Router } = require('express');

const { validateToken } = require('../services/loginService');

const { categories, allCategories } = require('../controllers/categoriesController');

const categoriesRouter = Router();

categoriesRouter.post('/', validateToken, categories);

categoriesRouter.get('/', validateToken, allCategories);

module.exports = categoriesRouter;