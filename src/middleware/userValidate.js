const userSchema = require('../Schema/userSchema');
const { getUserByEmail } = require('../service/userService');

const dataValidation = (req, res, next) => {
    const { displayName, email, password } = req.body;
    const { error } = userSchema.validate({ displayName, email, password });

    if (!error) return next();
    return res.status(400).json({ message: error.message });
};

const verifyEmail = async (req, res, next) => {
    const { email } = req.body;
    const result = await getUserByEmail(email);
    console.log(result);
    if (result) {
      return res.status(409).json({ message: 'User already registered' });
    }
    next();
};

module.exports = { dataValidation, verifyEmail };