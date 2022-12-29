const Post = require('../models/Post');
const data = require('../data');

// @route GET /
// get post and fetch data
exports.home = async (req, res) => {
  const posts = await Post.find();
  res.render('home', {
    startingContent: data.homeStartingContent,
    posts,
  });
};

// @route GET /compose
// render compose page
exports.renderCompose = (req, res) => {
  res.render('compose');
};

// @route POST /compose
// create post
exports.composePost = async (req, res) => {
  const { title, content } = req.body;

  const post = new Post({
    title,
    content,
  });

  await post.save();
  res.redirect('/');
};

// @route GET /posts/:id
// get a post by id
exports.getPost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id).catch((err) => res.render('404.ejs'));

  res.render('post', {
    title: post?.title,
    content: post?.content,
  });
};


// @route GET /about
// render about page
exports.about = (req, res) => {
  res.render('about', { aboutContent: data.aboutContent });
};


// @route GET /contact
// render contact page
exports.contact = (req, res) => {
  res.render('contact', { contactContent: data.contactContent });
};
