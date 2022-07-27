const { BlogPost, Category } = require('../models');

const postService = async (title, content, categoryId, userId) => {
  const searchById = await Promise.all(categoryId
    .map((catId) => Category.findOne(
      { where: { id: catId } },
    )));

    if (!searchById.every((category) => category)) {
      return { status: 400, message: '"categoryIds" not found' };
    }

  const post = { 
    title,
    content,
    categoryId,
    userId,
    published: new Date(),
    updated: new Date(),
   };

  const newPost = await BlogPost.create(post);
  return newPost;
};

module.exports = postService;
