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

      <footer className="footer">
        <h3>
          © 2025 SpringClean. All rights reserved. — Your trusted partner in
          creating spotless, stress-free spaces.
        </h3>

        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
