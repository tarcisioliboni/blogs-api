const { PostCategory } = require('../models');

const postCategoryService = async (postId, categoryIds) => {
  const addPostCat = categoryIds.map((categoryId) => ({
    postId,
    categoryId,
  }));

  await PostCategory.bulkCreate(addPostCat);
};

module.exports = postCategoryService;
