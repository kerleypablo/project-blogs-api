require('dotenv').config();
const jwt = require('jsonwebtoken');
const { createUser, getAll } = require('../service/userService');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
    expiresIn: '7d',
};

const create = async (req, res) => {
    const { displayName, password, email, image } = req.body;
    const user = { email, password, displayName, image };
    await createUser(user);
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    res.status(201).json({ token });
};

const getAllUser = async (req, res) => {
    const result = await getAll();

    return res.status(200).json(result);
};

module.exports = { create, getAllUser };