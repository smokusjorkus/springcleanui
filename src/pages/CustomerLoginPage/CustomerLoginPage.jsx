import React from "react";
import "./CustomerLoginPage.css";
import { Link } from "react-router-dom";

const CustomerLoginPage = () => {
  return (
    <div className="page-container">
      {/* Left side */}
      <div className="left-side">
        <h1>SpringClean</h1>
        <p>Book trusted cleaners for your home today.</p>
      </div>

      {/* Right side */}
      <div className="right-side">
        <div className="loginform-container">
          <h2>Customer Login</h2>
          <p className="subtitle">Welcome back! Please log in to continue.</p>

          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Login button */}
          <div className="form-group">
            <button className="login-btn">Log In</button>
          </div>

          <p className="signup-text">
            Don’t have an account? <Link to="/Register">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerLoginPage;
