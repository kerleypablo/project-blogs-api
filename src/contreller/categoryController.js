const { createCategorys } = require('../service/categoriesService');

const createcreateCategoies = async (req, res) => {
    const { name } = req.body;
    const id = await createCategorys(name);
    const result = { id, name };
    res.status(201).json(result);
};

module.exports = { createcreateCategoies };