const { Router } = require('express');

const { validateToken } = require('../services/loginService');

const { user, allUsers, byId } = require('../controllers/usersController');

const router = Router();

router.post('/', user);

router.get('/', validateToken, allUsers);

router.get('/:id', validateToken, byId);

module.exports = router;
