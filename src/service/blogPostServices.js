const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const newPost = async (object) => {
 const { title, content, categoryIds, id } = object;
 const t = await sequelize.transaction();
try {
    const creatPost = await BlogPost.create({ 
        title, content, userId: id, published: new Date(), updated: new Date(),
    }, { transaction: t });

    const PostCategoriesIds = categoryIds.map((idcat) => ({ postId: creatPost.id, categoryId: idcat,
     }));

    const resrultEnd = await PostCategory.bulkCreate(PostCategoriesIds, { transaction: t });
    
    if (!resrultEnd) throw new Error(' erro no resultend ');
    await t.commit();
    return creatPost;
} catch (error) {
    await t.rollback();
}
};

module.exports = { newPost };