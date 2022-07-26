const { Router } = require('express');

const { validateToken } = require('../services/loginService');

const { user, allUsers, byId } = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.post('/', user);

usersRouter.get('/', validateToken, allUsers);

usersRouter.get('/:id', validateToken, byId);

module.exports = usersRouter;
