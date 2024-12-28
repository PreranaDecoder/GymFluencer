const mongoose = require("mongoose");

const DietPlanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  meals: [
    {
      name: String,
      calories: Number,
      time: String,
    },
  ],
});

module.exports = mongoose.model("DietPlan", DietPlanSchema);
