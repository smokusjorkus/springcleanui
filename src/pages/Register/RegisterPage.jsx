import React from "react";
import FirstStep from "../../components/ChooseYourRoleForm/FirstStep/FirstStep";
import SecondStep from "../../components/ChooseYourRoleForm/SecondStep/SecondStep";
import ThirdStep from "../../components/ChooseYourRoleForm/ThirdStep/ThirdStep";
import NavBar from "../../components/Navbar/NavBar";
import StepJourney from "../../components/ChooseYourRoleForm/Journey/StepJourney";

import "./RegisterPage.css";
import { useState } from "react";

export default function ChooseYourUser() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="choose-user-page">
      <NavBar />
      <StepJourney currentStep={currentStep} />
      {currentStep === 1 && (
        <FirstStep
          currentStep={currentStep}
          onNext={nextStep}
          updateFormData={updateFormData}
          formData={formData}
        />
      )}

      {currentStep === 2 && (
        <SecondStep
          onNext={nextStep}
          onBack={prevStep}
          updateFormData={updateFormData}
          formData={formData}
        />
      )}

      {currentStep === 3 && <ThirdStep onBack={prevStep} formData={formData} />}
    </div>
  );
}
