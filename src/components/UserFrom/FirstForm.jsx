import React from "react";
import CustomerButton from "./CustomerButton";
import CleanerButton from "./CleanerButton";
const FirstForm = () => {
  return (
    <div>
      <div className="firstfrom-container">
        <h1 style={{ fontFamily: "Cal Sans", fontSize: "2rem" }}>
          Choose your Role
        </h1>
        <p style={{ fontFamily: "Nunito", fontSize: "1.5rem" }}>
          Are you looking for a booking or you trying be booked?
        </p>
        <div className="firstform-btns">
          <CustomerButton />
          <CleanerButton />
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
