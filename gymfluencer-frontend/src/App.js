import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Blogs from "./components/Pages/Blogs";
import WorkoutPlan from "./components/Pages/WorkoutPlan";
import DietPlan from "./components/Pages/DietPlan";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Benefits from "./components/Pages/Benefits";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/benefits" element={<Benefits />}></Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services/workout-plan" element={<WorkoutPlan />} />
        <Route path="/services/diet-plan" element={<DietPlan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
