const blogPostSchema = require('../Schema/blogPostSchema');
const { getAllCategories } = require('../service/categoriesService');

const blogPostValidate = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (title === null) { 
      return res.status(400)
      .json({ message: 'Some required fields are missing' });
    }
    const { error } = blogPostSchema.validate({ title, content, categoryIds });
    if (!error && title != null) return next();
    return res.status(400).json({ message: error.message });
};

const checkCategories = async (req, res, next) => {
    const { categoryIds } = req.body;
 const allIds = await getAllCategories();
   const idCad = allIds.map((category) => category.id);
    const cheking = categoryIds.every((id) => idCad.includes(id));
  if (!cheking) return res.status(400).json({ message: '"categoryIds" not found' });
 next();
};

module.exports = { blogPostValidate, checkCategories };