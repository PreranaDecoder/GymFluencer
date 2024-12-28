const express = require("express");
const {
  getDietPlan,
  updateDietPlan,
} = require("../controllers/dietPlanController");
const router = express.Router();

console.log("getDietPlan:", getDietPlan); // Should not be undefined
console.log("updateDietPlan:", updateDietPlan);

// Define routes
router.get("/:userId", getDietPlan); // Fetch diet plan for a specific user
router.put("/:userId", updateDietPlan); // Update diet plan for a specific user

module.exports = router;
