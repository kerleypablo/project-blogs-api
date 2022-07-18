const categorySchema = require('../Schema/categorySchema');

const CategoryValditate = (req, res, next) => {
    const { name } = req.body;
    const { error } = categorySchema.validate({ name });
    
    if (!error) return next();
    return res.status(400).json({ message: error.message });
};

module.exports = CategoryValditate;