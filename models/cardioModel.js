const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioSchema = new Schema({
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
      distance: {
        type: Number,
        required: true
      },
      duration: {
        type: Number,
        required: true
      }
    }
  ]

});

const cardio = mongoose.model("cardio", cardioSchema); //workout is the collection name

module.exports = cardio;