const express = require('express');
const router = express.Router();
const {
  home,
  renderCompose,
  composePost,
  getPost,
  about,
  contact,
} = require('../controllers/post-controller');

// Routes
router.get('/', home);

router.route('/compose').get(renderCompose).post(composePost);

router.get('/posts/:id', getPost);

router.get('/about', about);

router.get('/contact', contact);

module.exports = router;
