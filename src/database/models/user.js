const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER, 
      primarykey: true,
      autoIncrement: true,
    },
    displayName: {
      Type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    }});

    User.associate = (models) => {
      User.hasMany(models.BlogPosts, {
        foreignKey: 'userId', as: 'blogPosts'})
    }

  return User;
};

module.exports = User;