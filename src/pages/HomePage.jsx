import React from "react";
import NavBar from "../components/Navbar/NavBar";
import ServicesPage from "../components/ServicesPage/ServicesPage";
import AboutUsPage from "../components/AboutUsPage/AboutUsPage";
import LandingPage from "../components/LandingPage/LandingPage";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="homepage">
      <section>
        <NavBar />
      </section>
      <section id="home">
        <LandingPage />
      </section>

      <section id="services">
        <ServicesPage />
      </section>

      <section id="aboutus">
        <AboutUsPage />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
