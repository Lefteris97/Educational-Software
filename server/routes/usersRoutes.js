const router = require('express').Router()
const userController = require('../controllers/usersController')

//GET
router.get("/:id", userController.getUserById);

//GET ALL
router.get("/", userController.getAllUsers);

//UPDATE
router.put("/:id", userController.updateUser);

//DELETE
router.delete("/:id", userController.deleteUser);

module.exports = router