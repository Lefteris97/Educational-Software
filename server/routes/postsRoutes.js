const router = require('express').Router();
const postsController = require('../controllers/postsController');

//CREATE
router.post("/", postsController.createNewPost);

module.exports = router