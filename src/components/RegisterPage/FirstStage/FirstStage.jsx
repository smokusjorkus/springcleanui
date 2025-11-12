import React from "react";
import "./FirstStage.css";
import { Link } from "react-router-dom";

const FirstStage = ({ role, setRole, goToNextStage }) => {
  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole); // Store the role in RegisterPage
    goToNextStage(); // Move to the next stage
  };

  return (
    <div className="firststage-container">
      <div className="toppart">
        <Link to="/">
          <p>Back</p>
        </Link>
        <h1>Choose your role.</h1>
      </div>
      <div className="content-container">
        {/* Left side - Cleaner */}
        <div className="firststage-left">
          <button
            className="cleaner-button"
            onClick={() => handleRoleSelection("cleaner")}
          >
            Cleaner
          </button>
        </div>

        {/* Right side - Customer */}
        <div className="firststage-right">
          <button
            className="customer-button"
            onClick={() => handleRoleSelection("customer")}
          >
            Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstStage;
