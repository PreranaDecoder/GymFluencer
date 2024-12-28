import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Track Your Fitness Journey</h1>
        <p>
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay
          motivated and achieve your goals with ease.
        </p>
        {/* Add the Join Us Now button */}
        <a href="/register" className="join-btn">
          Join Us Now
        </a>
      </div>
    </div>
  );
}

export default Home;
