const express = require("express")

const router = express.Router()

const controller = require("../controller/LearnersController")

//Crud ops API Paths

// Create
router.post("/add-learner", controller.addLearner)


// Read
router.get("/get-learners", controller.getLearners)
router.get("/get-learner-by-name/:learner_name", controller.getLearner)

// Update
router.put("/update-email-not-present", controller.updateLearner)


// delete
router.delete("/delete-learner-by-name/:learner_name", controller.deleteLearner)

module.exports = router