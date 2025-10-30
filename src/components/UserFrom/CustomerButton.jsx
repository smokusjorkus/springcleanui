import React from "react";
import customerIcon from "../../assets/user-solid-full.svg";

const CustomerButton = ({ onClick }) => {
  return (
    <button className="customer-btn" onClick={onClick}>
      <img
        src={customerIcon}
        alt="Customer Icon"
        className="icon"
        style={{ width: "24px", height: "24px", marginRight: "10px" }}
      />
      Customer
    </button>
  );
};

export default CustomerButton;
