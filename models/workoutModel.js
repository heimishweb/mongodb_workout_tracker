const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: Date,
  workouts: [
    {
      type: { //resistence or cardio
        type: String,
        trim: true,
        required: "String is Required"
      },
      name: { //name of the workout
        type: String,
        trim: true,
        required: "String is Required"
      },
      duration: {
        type: Number,
        required: true
      },
      weight: {
        type: Number,
        required: true
      },
      reps: {
        type: Number,
        required: true
      },
      sets: {
        type: Number,
        required: true
      }
    }
  ]

});

const workout = mongoose.model("workout", workoutSchema); //workout is the collection name

module.exports = workout;