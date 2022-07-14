const { User } = require('../database/models');

const getUserByEmail = async (email) => {
    const result = await User.findOne({
        where: { email },
    });

    if (!result) return result; 

    return result.dataValues;
};

module.exports = { getUserByEmail };