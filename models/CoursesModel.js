const mongoose = require("mongoose")

const CoursesSchema = new mongoose.Schema({
    course_id : {
        type : Number,
        required : true
    },
    course_name : {
        type : String,
        required: true,
    },
    course_description : {
        type : String,
        required : false
    }
})

module.exports = mongoose.model("Courses", CoursesSchema)
