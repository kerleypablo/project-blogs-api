const { getUserByEmail } = require('../service/userService');

const loginValidate = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const checkUser = await getUserByEmail(email);
    
    if (!checkUser || checkUser.password !== password) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    next();
};
module.exports = loginValidate;