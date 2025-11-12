import React, { useState } from "react";
import "./CustomerSecondStage.css";

export default function CustomerSecondStage({
  userData,
  handleInputChange,
  goToPreviousStage,
}) {
  const [errors, setErrors] = useState({});

  // Simple validation example
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!userData.name) newErrors.name = "Name is required.";
    if (!userData.email) newErrors.email = "Email is required.";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email))
      newErrors.email = "Invalid email.";
    if (!userData.contact) newErrors.contact = "Contact is required.";
    else if (!/^\d{7,15}$/.test(userData.contact))
      newErrors.contact = "Invalid contact number.";
    if (!userData.password) newErrors.password = "Password is required.";
    else if (userData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", userData);
      // Proceed to next stage or API call
    }
  };

  return (
    <div className="customersecondstagecontainer">
      <div>
        <h1
          className="brand-title"
          style={{ fontSize: "5rem", color: "#1c4274" }}
        >
          SpringClean
        </h1>
        <p
          className="description"
          style={{
            fontFamily: "Nunito",
            color: "#ffffffff",
            fontSize: "1.2rem",
          }}
        >
          Your most trusted cleaning service.
        </p>
      </div>

      <form className="CSformcontainer" onSubmit={handleSubmit}>
        <div className="CSformGroup">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={userData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="CSformGroup">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="CSformGroup">
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            placeholder="Enter your contact number"
            value={userData.contact}
            onChange={handleInputChange}
          />
          {errors.contact && <span className="error">{errors.contact}</span>}
        </div>

        <div className="CSformGroup">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={userData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="CSbuttonGroup">
          <button
            type="button"
            onClick={goToPreviousStage}
            className="back-button"
          >
            Back
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
