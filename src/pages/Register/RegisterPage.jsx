import React, { useState } from "react";
import FirstStage from "../../components/RegisterPage/FirstStage/FirstStage";
import CleanerSecondStage from "../../components/RegisterPage/SecondStage/CleanerSecondStage";
import CustomerSecondStage from "../../components/RegisterPage/SecondStage/CustomerSecondStage";
import ThirdStage from "../../components/RegisterPage/ThirdStage/ThirdStage";

import "./RegisterPage.css";

export default function RegisterPage() {
  const [currentStage, setCurrentStage] = useState(1);
  const [role, setRole] = useState("");

  // Data for both roles
  const [userData, setUserData] = useState({
    cleaner: {
      companyName: "",
      email: "",
      contact: "",
      address: "",
      password: "",
    },
    customer: {
      name: "",
      email: "",
      contact: "",
      password: "",
    },
  });

  // Handle input change for both roles
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [role]: {
        ...prevData[role],
        [name]: value,
      },
    }));
  };

  // Go to next/previous stage
  const goToNextStage = () => setCurrentStage((prev) => prev + 1);
  const goToPreviousStage = () => setCurrentStage((prev) => prev - 1);

  return (
    <div className="register-page">
      {currentStage === 1 && (
        <FirstStage
          role={role}
          setRole={setRole}
          goToNextStage={goToNextStage}
        />
      )}

      {currentStage === 2 && role === "cleaner" && (
        <CleanerSecondStage
          role={role}
          userData={userData[role]}
          handleInputChange={handleInputChange}
          goToPreviousStage={goToPreviousStage}
          goToNextStage={goToNextStage}
        />
      )}

      {currentStage === 2 && role === "customer" && (
        <CustomerSecondStage
          role={role}
          userData={userData[role]}
          handleInputChange={handleInputChange}
          goToPreviousStage={goToPreviousStage}
          goToNextStage={goToNextStage}
        />
      )}

      {currentStage === 3 && <ThirdStage></ThirdStage>}
    </div>
  );
}
