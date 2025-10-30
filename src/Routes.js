import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ChooseYourRole from "./pages/ChooseYourRole/ChooseYourRole";
import CleanerLoginPage from "./pages/CleanerLoginPage/CleanerLoginPage";
import CustomerLoginPage from "./pages/CustomerLoginPage/CustomerLoginPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ChooseYourRole" element={<ChooseYourRole />} />
        <Route path="/login/cleaner" element={<CleanerLoginPage />} />
        <Route path="/login/Customer" element={<CustomerLoginPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
