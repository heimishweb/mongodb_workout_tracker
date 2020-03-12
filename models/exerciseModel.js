const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: { //resistence or cardio
    type: String,
    trim: true,
    required: "String is Required"
  },
  name: { //name of the exercise
    type: String,
    trim: true,
    required: "String is Required"
  },
  weight: {
    type: Number,
    unique: true,
    required: true
  },
  sets: {
    type: Number,
    unique: true,
    required: true
  },
  reps: {
    type: Number,
    unique: true,
    required: true
  },
  duration: {
    type: Number,
    unique: true,
    required: true
  },
    date: {
    type: Date,
    default: Date.now
  }

});

const Exercise = mongoose.model("Exercise", ExerciseSchema); //exercise is the collection name

module.exports = Exercise;