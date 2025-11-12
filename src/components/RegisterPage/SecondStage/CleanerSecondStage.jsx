import React, { useState } from "react";
import "./CleanerSecondStage.css";

export default function CleanerSecondStage({
  userData,
  handleInputChange, // prop from parent
  goToPreviousStage,
  goToNextStage,
}) {
  const [errors, setErrors] = useState({});

  // Validation function
  const validateData = () => {
    const newErrors = {};
    if (!userData.companyName)
      newErrors.companyName = "Company name is required";
    if (!userData.email) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email))
      newErrors.email = "Invalid email";

    if (!userData.contact) newErrors.contact = "Contact is required";
    else if (!/^\d{7,15}$/.test(userData.contact))
      newErrors.contact = "Invalid contact number";

    if (!userData.password) newErrors.password = "Password is required";
    else if (userData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateData();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", userData);
      goToNextStage();
      // TODO: proceed to next step or call API
    }
  };

  return (
    <div className="cleanersecondstagecontainer">
      <div>
        <h1 className="brand-title" style={{ fontSize: "5rem" }}>
          SpringClean
        </h1>
        <p
          className="description"
          style={{ fontFamily: "Nunito", color: "white", fontSize: "1.2rem" }}
        >
          Your most trusted cleaning service.
        </p>
      </div>

      <form className="CLformcontainer" onSubmit={handleSubmit}>
        <div className="CLformGroup">
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={userData.companyName}
            onChange={handleInputChange}
          />
          {errors.companyName && (
            <span className="error">{errors.companyName}</span>
          )}
        </div>

        <div className="CLformGroup">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="CLformGroup">
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={userData.contact}
            onChange={handleInputChange}
          />
          {errors.contact && <span className="error">{errors.contact}</span>}
        </div>

        <div className="CLformGroup">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="CLformGroup">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="CLbuttonGroup">
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
