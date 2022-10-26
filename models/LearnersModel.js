const mongoose = require("mongoose")

// creating Learners schema

const LearnerSchema = new mongoose.Schema({
    learner_name : {
        type : String,
        required : true
    },
    learner_email : {
        type : String,
        required: false,
    },
    learner_password : {
        type : String,
        required : true
    }
})

module.exports= mongoose.model("Learners", LearnerSchema)

