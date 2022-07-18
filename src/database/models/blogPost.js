const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    published: {
      type: DataTypes.DATE,
    },
    updated: {
      type: DataTypes.DATE,
    },
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,{
      foreigKey: 'userId', as: 'user'
    })
  }

  return BlogPost;
};

module.exports = BlogPost;