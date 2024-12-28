const DietPlan = require("../models/DietPlan");

// Controller to get a user's diet plan
console.log("dietPlanController loaded");
exports.getDietPlan = async (req, res) => {
  const { userId } = req.params;

  try {
    const dietPlan = await DietPlan.findOne({ user: userId });
    if (!dietPlan) {
      return res.status(404).json({ message: "Diet plan not found" });
    }
    res.json(dietPlan);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Controller to update a user's diet plan
exports.updateDietPlan = async (req, res) => {
  console.log("Inside updateDietPlan");
  const { userId } = req.params;
  const { meals } = req.body;

  try {
    const dietPlan = await DietPlan.findOneAndUpdate(
      { user: userId },
      { meals },
      { new: true, upsert: true }
    );
    res.json(dietPlan);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
