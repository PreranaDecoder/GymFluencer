const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"], // Allows role-based permissions
      default: "user",
    },
    workouts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout",
      },
    ],
    dietPlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DietPlan",
    },
    profilePicture: {
      type: String, // URL for the profile picture
      default: "", // Optional default value
    },
    bio: {
      type: String,
      maxLength: 300, // Optional bio or user description
    },
    location: {
      type: String, // Optional user location
    },
    dateOfBirth: {
      type: Date, // Optional field for the user's date of birth
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically tracks account creation time
    },
    updatedAt: {
      type: Date,
      default: Date.now, // Automatically updates when user data changes
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields automatically
  }
);

module.exports = mongoose.model("User", UserSchema);
