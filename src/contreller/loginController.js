require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtconfig = {
    expiresIn: '7d',
    algoityhm: 'HS256',
};

const loginController = (req, res) => {
    const { email, password } = req.body;
    const user = { email, password };

    const token = jwt.sign({ data: user }, secret, jwtconfig);
    res.status(200).json({ token });
};

module.exports = loginController;