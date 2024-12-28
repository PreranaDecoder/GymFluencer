const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/auth")); // Authentication routes
app.use("/api/workouts", require("./routes/workouts")); // Workout routes
app.use("/api/dietPlans", require("./routes/dietPlans")); // Diet Plan routes

// Default route for testing
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Socket.IO logic
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
