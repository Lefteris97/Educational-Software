const router = require('express').Router()
const lessonController = require('../controllers/lessonsController')

//CREATE
router.post("/", lessonController.createNewLesson);

//GET
router.get("/:id", lessonController.getLessonById);

//GET ALL
router.get("/", lessonController.getAllLessons);

//UPDATE
router.put("/:id", lessonController.updateLesson);

//DELETE
router.delete("/:id", lessonController.deleteLesson);

module.exports = router