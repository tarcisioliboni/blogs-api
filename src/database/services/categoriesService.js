const { Category } = require('../models');

const categoriesService = {
  postInCategories: async (name) => {
    if (!name) {
      return { status: 400, message: '"name" is required' };
    }
    const category = await Category.create({ name });
    return { status: 201, category };
  },
  
  allCategoriesS: async () => {
    const allCategories = await Category.findAll();
    return allCategories;
  },
};

module.exports = categoriesService;
