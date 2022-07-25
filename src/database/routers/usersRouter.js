const { Router } = require('express');

const user = require('../controllers/usersController');

const router = Router();

router.get('/', user);

module.exports = router;
