import React, { useState, useEffect } from "react";
import "./LandingPageStyle.css";
import cleaner1 from "../../assets/cleaners1.jpg";
import cleaner2 from "../../assets/cleaners2.jpg";
import cleaner3 from "../../assets/cleaners3.jpg";
import cleaner4 from "../../assets/banana.jpg";

const images = [cleaner1, cleaner2, cleaner3, cleaner4];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // 🧹 cleanup when unmounted
  }, []);

  return (
    <div
      className="landing-page-hero"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <h2 className="hero-title">Welcome to SpringClean</h2>
      <p className="hero-subtitle" style={{ color: "white" }}>
        Your one-stop solution for all your cleaning needs.
      </p>

      <div className="hero-buttons">
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
};

export default LandingPage;
