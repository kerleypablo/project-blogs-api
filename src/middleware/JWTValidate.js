const JWT = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validateJWT = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
      JWT.verify(token, secret);
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next();
};

module.exports = validateJWT;
