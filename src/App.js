// App.js
import "./App.css";
import React from "react";
import NavBar from "./components/Navbar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import AboutUsPage from "./components/AboutUsPage//AboutUsPage";

function App() {
  return (
    <div>
      <NavBar />
      <section id="home">
        <LandingPage />
      </section>
      <section id="services">
        <ServicesPage />
      </section>
      <section id="aboutus">
        <AboutUsPage />
      </section>
    </div>
  );
}

export default App;
