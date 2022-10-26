const express = require("express")

const router = express.Router()

const controller = require("../controller/CoursesController")

//Crud ops API Paths

// Create
router.post("/add-course", controller.addCourse)


// Read
router.get("/get-courses", controller.getCourses)
router.get("/get-course-by-name/:course_name", controller.getCourse)

// Update
router.put("/update-description-by-name", controller.updateCourse)


// delete
router.delete("/delete-course-by-name/:course_name", controller.deleteCourse)

module.exports = router