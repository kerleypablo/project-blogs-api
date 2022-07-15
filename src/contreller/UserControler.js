require('dotenv').config();
const jwt = require('jsonwebtoken');
const { createUser } = require('../service/userService');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
    expiresIn: '7d',
};

const UserController = async (req, res) => {
    const { displayName, password, email, image } = req.body;
    const user = { email, password, displayName, image };
    await createUser(user);
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    res.status(201).json({ token });
};

module.exports = UserController;