import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import CleanerLoginPage from "./pages/CleanerLoginPage/CleanerLoginPage";
import CustomerLoginPage from "./pages/CustomerLoginPage/CustomerLoginPage";
import ChooseYourRole from "./pages/ChooseYourRole/ChooseYourRole";
import CustomerHomePage from "./pages/CustomerHomePage/CustomerHomePage";
import CustomerBookingPage from "./pages/CustomerBookingPage/CustomerBookingPage";
import CustomerBookingSummary from "./pages/CustomerBookingSummary/CustomerBookingSummary";
import CustomerPaymentPage from "./pages/CustomerPaymentPage/CustomerPaymentPage";
import CustomerProfilePage from "./pages/CustomerProfilePage/CustomerProfilePage";
import CustomerSettingsPage from "./pages/CustomerSettingsPage/CustomerSettingsPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chooseyouruser" element={<LoginRegisterPage />} />
        <Route path="/login/cleaner" element={<CleanerLoginPage />} />
        <Route path="/login/Customer" element={<CustomerLoginPage />} />
        <Route path="/customer/home" element={<CustomerHomePage />} />
        <Route path="/customer/booking" element={<CustomerBookingPage />} />
        <Route
          path="/customer/bookingSummary"
          element={<CustomerBookingSummary />}
        />
        <Route path="/customer/payment" element={<CustomerPaymentPage />} />
        <Route path="/customer/profile" element={<CustomerProfilePage />} />
        <Route path="/customer/settings" element={<CustomerSettingsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
