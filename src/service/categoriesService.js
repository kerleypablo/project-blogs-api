const { Category } = require('../database/models');

const createCategorys = async (name) => {
    const result = await Category.create({ name });
   return result.dataValues.id;
};

const getAllCategories = async () => {
    const result = await Category.findAll();
    return result;
};

const getCategoriesById = async (id) => {
    const result = await Category.findOne({ where: { id } });
    return result;
};

module.exports = { createCategorys, getAllCategories, getCategoriesById };