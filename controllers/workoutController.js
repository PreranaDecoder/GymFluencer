const Workout = require("../models/Workout");

exports.addWorkout = async (req, res) => {
  const { userId, exercises } = req.body;

  try {
    const workout = new Workout({ user: userId, exercises });
    await workout.save();
    res.json(workout);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.params.userId });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
