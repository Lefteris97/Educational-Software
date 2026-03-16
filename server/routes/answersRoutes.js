const router = require('express').Router();
const answersController = require('../controllers/answersController');

//CREATE
router.post("/", answersController.upload, answersController.createNewAnswer);

//GET
// router.get("/:", ;

//GET ALL
router.get("/", answersController.getAllAnswers);

//GET ANSWERS BY EXERCISE ID
router.get("/of/:exId", answersController.getAnswersByExId);

//UPDATE GRADES - PUT GRADES
router.put("/grade_answers", answersController.giveGrade);

module.exports = router