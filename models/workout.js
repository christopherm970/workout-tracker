const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  exercises: [
    {
      type: {
        type: String,
        required: true,
      },
      name: { type: String, required: true },
      duration: {
        type: Number,
        required: true,
      },
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
