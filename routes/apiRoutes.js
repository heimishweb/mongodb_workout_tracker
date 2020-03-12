var workout = require('../models/workoutModel')

var router = require("express").Router()

module.exports = function (router) {
    //router.get
    router.get("/api/workouts", (req, res) => {
        workout.find({}, (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.json(data);
            }
        });
    });

    //router.put
    router.put("/api/workouts/:id", ({ body }, res) => {
        bodyReFormat = 
        {
            day: new Date().setDate(new Date().getDate()),
            workouts: [
                body
            ]
        }
        workout.create(bodyReFormat)
            .then(dbworkout => {
                res.json(dbworkout);
                console.log(bodyReFormat)
            })
            .catch(err => {
                res.json(err);
            });
    });


    //router.post
    router.post("/api/workouts", ({ body }, res) => {
        workout.create(body)
            .then(dbworkout => {
                res.json(dbworkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //router.delete

    //router.range *bonus*


}





// app.post("/submit", ({body}, res) => {
//     db.Book.create(body)
//       .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//       .then(dbLibrary => {
//         res.json(dbLibrary);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });