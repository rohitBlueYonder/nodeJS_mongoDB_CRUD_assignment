const express = require("express")
const mongoose = require("mongoose")

const routes_learner = require("./routes/LearnersRoutes")
const routes_course = require("./routes/CoursesRoutes")

// initialize express app
const app = express()

// creating server at port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000")
})

app.use(express.json())

// default route
app.use("/welcome", (req,res) => {
    res.send("Testing testing")
})

// add the routes
app.use("/learners", routes_learner)
app.use("/courses", routes_course)





// connecting to database
const uri = "mongodb+srv://Rohit_Rai:Rohit123456@cluster1.cksibjs.mongodb.net/employeeNodejs?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser:true}).
        then(() => {console.log("Database Connected")}).
        catch((error) => {console.log(error)})

