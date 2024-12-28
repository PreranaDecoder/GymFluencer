const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  exercises: [
    {
      name: String,
      reps: Number,
      sets: Number,
    },
  ],
});

module.exports = mongoose.model("Workout", WorkoutSchema);
