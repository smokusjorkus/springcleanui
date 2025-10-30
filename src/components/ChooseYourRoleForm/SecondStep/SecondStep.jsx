import React, { useState } from "react";
import "./SecondStep.css";
import StepJourney from "../Journey/StepJourney";

export default function SecondStep({
  onNext,
  onBack,
  updateFormData,
  formData,
}) {
  const [firstName, setFirstName] = useState(formData.firstName || "");
  const [lastName, setLastName] = useState(formData.lastName || "");
  const [email, setEmail] = useState(formData.email || "");
  const [password, setPassword] = useState(formData.password || "");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Get the role from FirstStep
  const userType = formData.role || "User";

  const handleNext = () => {
    // Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email!");
      return;
    }

    // Save data and proceed
    updateFormData({ firstName, lastName, email, password });
    onNext();
  };

  return (
    <div className="form-container">
      <div className="description">
        <h1>
          Create a {userType.charAt(0).toUpperCase() + userType.slice(1)}{" "}
          Account
        </h1>
        <p>Fill in your details to get started</p>
      </div>

      <div className="form-fields">
        <div className="name-row">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-input"
          />

          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-input"
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />

        <input
          type="password"
          placeholder="Password (min. 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="button-group">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <button className="next-button" onClick={handleNext}>
          Next →
        </button>
      </div>
    </div>
  );
}
