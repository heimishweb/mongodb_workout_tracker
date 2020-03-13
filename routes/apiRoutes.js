var exercise = require('../models/exerciseModel')
var cardio = require('../models/cardioModel')

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

    //router.put for resistance [works]
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


    //router.post for cardio
    router.post("/api/workouts", ({ body }, res) => {
        bodyReFormat = 
        {
            day: new Date().setDate(new Date().getDate()),
            workouts: [
                body
            ]
        }
        cardio.create(body)
            .then(dbworkout => {
                res.json(dbworkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //router.delete

    //router.range for stats.
    router.get("/api/workouts/range", ({body}, res) => {
        exercise.find({}, (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.json(data);
            }
            console.log(data);
        });
    });


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