const { Router } = require('express');

const { validateToken } = require('../services/loginService');

const addPost = require('../controllers/postController');

const postRouter = Router();

postRouter.post('/', validateToken, addPost);

module.exports = postRouter;
