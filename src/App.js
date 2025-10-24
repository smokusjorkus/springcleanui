// App.js
import "./App.css";
import React from "react";
import NavBar from "./components/Navbar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";

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
    </div>
  );
}

export default App;
