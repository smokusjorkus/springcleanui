import React from "react";
import broomIcon from "../../assets/broom.ico";

const CleanerButton = ({ onClick }) => {
  return (
    <button className="cleaner-btn" onClick={onClick}>
      <img
        src={broomIcon}
        alt="cleaner-icon"
        style={{ width: "24px", height: "24px", marginRight: "10px" }}
      />
      Cleaner
    </button>
  );
};

export default CleanerButton;
