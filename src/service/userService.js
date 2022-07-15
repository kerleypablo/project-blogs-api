const { User } = require('../database/models');

const getUserByEmail = async (email) => {
    const result = await User.findOne({
        where: { email },
    });

    if (!result) return result; 
    return result.dataValues;
};

const getAll = async () => {
    try {
        const result = await User.findAll({ attributes: { exclude: ['password'] } });
        return result;
    } catch (error) {
        return error;
    }
};

const createUser = async (object) => {
    const { email, password, displayName, image } = object;
    const result = await User.create({ email, password, displayName, image });
   return result.dataValues;
};

module.exports = { getUserByEmail, createUser, getAll };