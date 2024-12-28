import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Add a separate CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">GymFluencer</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="dropdown">
          <span>Our Services ▼</span>
          <ul className="dropdown-content">
            <li>
              <Link to="/services/workout-plan">Workout Plan</Link>
            </li>
            <li>
              <Link to="/services/diet-plan">Diet Plan</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/benefits">Benefits</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/register" className="join-us-btn">
            Join Us Now
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
