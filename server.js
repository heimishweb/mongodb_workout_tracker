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
require("./routes/apiRoutes.js")(app)

app.listen(PORT, function () {
  console.log("app listening on port: " + PORT)
})

//mongoose connection

const mongoose = require("mongoose");

const exerciseModel = require("./models/exerciseModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//seeds and creating documents

// let workoutSeed = [
//   {
//     day: new Date().setDate(new Date().getDate() - 10),
//     workouts: [
//       {
//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 9),
//     workouts: [
//       {
//         type: "resistance",
//         name: "Lateral Pull",
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 8),
//     workouts: [
//       {
//         type: "resistance",
//         name: "Push Press",
//         duration: 25,
//         weight: 185,
//         reps: 8,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 7),
//     workouts: [
//       {
//         type: "cardio",
//         name: "Running",
//         duration: 25,
//         distance: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 6),
//     workouts: [
//       {
//         type: "resistance",
//         name: "Bench Press",
//         duration: 20,
//         weight: 285,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 5),
//     workouts: [
//       {
//         type: "resistance",
//         name: "Bench Press",
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 4),
//     workouts: [
//       {
//         type: "resistance",
//         name: "Quad Press",
//         duration: 30,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 3),
//     workouts: [
//       {
//         type: "resistance",
//         name: "Bench Press",
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 2),
//     workouts: [
//       {
//         type: "resistance",
//         name: "Military Press",
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 1),
//     workouts: [
//       {
//         type: "resistance",
//         name: "Bench",
//         duration: 30,
//         distance: 2
//       }
//     ]
//   }
// ];

// //in collection workout add document data2 for dbworkout database
// for (i = 0; i < workoutSeed.length; i++) {
//   exerciseModel.create(workoutSeed[i])
//     .then(workout => {
//       console.log(workout);
//     })
//     .catch(({ message }) => {
//       console.log(message);
//     });
// }