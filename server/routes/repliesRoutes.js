const router = require('express').Router();
const repliesController = require('../controllers/repliesController');

//CREATE
router.post("/", repliesController.createNewReply);

module.exports = router