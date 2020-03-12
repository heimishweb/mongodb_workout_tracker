var express = require("express");
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")) //added
app.use("/routes", express.static(__dirname + '/routes'));
app.use("/public", express.static(__dirname + '/public'));


app.use(express.json());
require("./routes/htmlRoutes.js")(app)
// require("./routes/apiRoutes.js")(app)

app.listen(PORT, function () {
    console.log("app listening on port: " + PORT)
})

//mongoose connection

const mongoose = require("mongoose");

const Exercise = require("./models/exerciseModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExercise", { useNewUrlParser: true });

const data2 = {
    type: "resistance",
    name: "tricep pulldown",
    weight: 10,
    sets: 20,
    reps: 30,
    duration: 40

};

//in collection exercise add document data2 for dbExercise database
Exercise.create(data2)
    .then(dbExercise => {
        console.log(dbExercise);
    })
    .catch(({ message }) => {
        console.log(message);
    });
