const postService = require('../services/postService');
const { postSchema } = require('../schemas');
const postCategoryService = require('../services/postCategoryService');

const addPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user;
  const { error } = postSchema.validate({ title, content, categoryIds });

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const result = await postService(title, content, categoryIds, userId);

  if (result.message) {
    return res.status(result.status).json({ message: result.message });
  }

  await postCategoryService(result.id, categoryIds);
  res.status(201).json(result);
};

module.exports = addPost;
