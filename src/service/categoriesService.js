const { Category } = require('../database/models');

const createCategorys = async (name) => {
    const result = await Category.create(name);
   return result.dataValues.id;
};

module.exports = { createCategorys };