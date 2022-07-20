const { newPost } = require('../service/blogPostServices');
const { getUserByEmail } = require('../service/userService');

const postOnBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const email = req.user;
  const { id } = await getUserByEmail(email);
  const object = { title, content, id, categoryIds };
  const result = await newPost(object);
  console.log(result);
  return res.status(201).json(result);
};

module.exports = { postOnBlogPost };