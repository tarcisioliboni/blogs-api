const { postInCategories, allCategoriesS } = require('../services/categoriesService');

const categoriesController = {
  categories: async (req, res) => {
    const { name } = req.body;
    const { status, message, category } = await postInCategories(name);
    if (message) {
      return res.status(status).json({ message });
    }
    res.status(status).json(category);
  },
  
  allCategories: async (_req, res) => {
    const allCategories = await allCategoriesS();
    res.status(200).json(allCategories);
  },
};

module.exports = categoriesController;
