const LearnersModel = require("../models/LearnersModel")

// add-learner
exports.addLearner = (req,res) => {
    const learner = new LearnersModel({
        learner_name : req.body.learner_name,
        learner_email : req.body.learner_email,
        learner_password : req.body.learner_password
    })

    learner.save().
                then( (data) => {
                    res.status(200).json({
                        message : "Successfully added one Learner",
                        data : data
                    })
                }).
                catch( (error) => {
                    res.send(error)
                })
}

// get-learners
exports.getLearners = (req,res) => {
    const learners = LearnersModel.find()
    learners.
            then( (data) => {
                res.status(200).json({
                    message : "Successfully retrieved all Learners ",
                    data : data
                })
            }).
            catch( (error) => {
                res.send(error)
            })
}

// get-learner-by-name
exports.getLearner = (req,res) => {
    const learner = LearnersModel.find({learner_name:req.params.learner_name})
    learner.
            then( (data) => {
                res.status(200).json({
                    message : "Successfully retrieved "+ req.params.learner_name+"'s data",
                    data : data
                })
            }).
            catch( (error) => {
                res.send(error)
            })
}

// update-email-not-present
exports.updateLearner = (req,res) => {
    LearnersModel.updateOne({learner_email:{$exists:false}}, 
                            {$set:{learner_email:"tempMail12345@gmail.com"}},
                            () => {
                                res.status(200).json({
                                    message : "Successfully Updated email where it was not present"
                                })
                            })
}

// delete-learner-by-name
exports.deleteLearner = (req,res) => {
    LearnersModel.deleteOne({learner_name:req.params.learner_name},
                            () => {
                                res.status(200).json({
                                    message : "Successfully Deleted "+req.params.learner_name+"'s data."
                                })
                            })
}