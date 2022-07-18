const { createCategorys, getAllCategories } = require('../service/categoriesService');

const createcreateCategoies = async (req, res) => {
    const { name } = req.body;
    const id = await createCategorys(name);
    const result = { id, name };
    res.status(201).json(result);
};

const getAll = async (req, res) => {
    const result = await getAllCategories();
    res.status(200).json(result);
};

module.exports = { createcreateCategoies, getAll };