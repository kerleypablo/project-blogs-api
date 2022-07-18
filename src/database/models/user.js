const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: {
      type: DataTypes.STRING
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
    }
  },
    {
      timestamps: false,
      tableName: 'Users',
    },
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'userId', as: 'blogPost'
    });
  }

  return User;
};

module.exports = User;