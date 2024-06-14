const router = require('express').Router()
const exerciseController = require('../controllers/exerciseController')

//CREATE
router.post("/", exerciseController.upload, exerciseController.createNewExercise);

//GET
router.get("/:id", exerciseController.getExerciseById);

//GET ALL
router.get("/", exerciseController.getAllExercises);

//UPDATE
router.put("/:id", exerciseController.updateExercise);

//DELETE
router.delete("/:id", exerciseController.deleteExercise);

module.exports = router