import React from "react";
import "./Auth.css";

function Register() {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h1>Register</h1>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your full name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Create a password" />
        <button type="submit">Register</button>
        <a href="/login" className="login-link">
          Already have an account? Login
        </a>
      </form>
    </div>
  );
}

export default Register;
