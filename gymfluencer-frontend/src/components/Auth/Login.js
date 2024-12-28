import React from "react";
import "./Auth.css";

function Login() {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
        <a href="/register" className="register-link">
          Don't have an account? Register
        </a>
      </form>
    </div>
  );
}

export default Login;
