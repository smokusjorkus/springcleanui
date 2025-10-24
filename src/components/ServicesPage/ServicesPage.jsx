import React, { useState } from "react";
import "./ServicesPageStyle.css";
import cleanerImage from "../../assets/banana.jpg";

const ServicesPage = () => {
  const [serviceType, setServiceType] = useState("");
  const [typeOfService, setTypeOfService] = useState("");

  return (
    <div className="services-page-hero">
      {/* LEFT SIDE */}
      <div className="services-content">
        <h2 style={{ textAlign: "center" }}>Our Services</h2>
        <p className="hero-subtitle">
          Choose what fits you best — book trusted cleaners or start earning as
          one.
        </p>

        <div className="services-buttons">
          <button
            className="service-button"
            onClick={() => setServiceType("customer")}
          >
            Customer Services
          </button>
          <button
            className="service-button"
            onClick={() => setServiceType("cleaner")}
          >
            Cleaner Services
          </button>
        </div>

        {/* Conditional text display */}
        {serviceType === "customer" && (
          <div className="service-info">
            <div className="types-of-services">
              <button
                className="service-button"
                onClick={() => setTypeOfService("Basic")}
              >
                Basic Cleaning
              </button>
              <button
                className="service-button"
                onClick={() => setTypeOfService("Standard")}
              >
                Standard Cleaning
              </button>
              <button
                className="service-button"
                onClick={() => setTypeOfService("Premium")}
              >
                Premium Cleaning
              </button>
            </div>
          </div>
        )}

        {/* Show content depending on selected service type */}
        {serviceType === "customer" && typeOfService === "Basic" && (
          <div className="basicservice-info">
            <h1>Basic: ₱450</h1>

            <hr className="divider" />

            <p>
              Basic Cleaning includes dusting, sweeping, mopping, and bathroom
              sanitation.
            </p>
          </div>
        )}

        {serviceType === "customer" && typeOfService === "Standard" && (
          <div className="service-info">
            <h1>Standard: ₱700</h1>
            <hr className="divider" />
            <p>
              Includes:
              <br />
              <ul style={{ textDecoration: "none" }}>
                <li style={{ textDecoration: "none" }}>
                  Appliance surface wipe-down (microwave, fridge, etc.)
                </li>
                <li style={{ textDecoration: "none" }}>
                  Interior window cleaning
                </li>
                <li style={{ textDecoration: "none" }}>Vacuuming upholstery</li>
                <li style={{ textDecoration: "none" }}>
                  Bedmaking and minor decluttering
                </li>
              </ul>
              <br></br>
              <hr className="divider" />
              Duration: ~2–3 hours
              <br />
              Recommended for: regular household cleaning (weekly or bi-weekly)
            </p>
          </div>
        )}

        {serviceType === "customer" && typeOfService === "Premium" && (
          <div className="service-info">
            <h1>Premium: ₱1000 </h1>
            <hr className="divider" />
            <p>
              Includes everything in Standard plus deep cleaning, window
              washing, and inside appliance cleaning.
            </p>
          </div>
        )}

        {serviceType === "cleaner" && (
          <div className="service-info">
            <h2 className="service-title">For Cleaners</h2>
            <p>
              Join SpringClean and start earning! Accept bookings that fit your
              schedule, build your profile, and grow your reputation with
              satisfied customers.
            </p>
          </div>
        )}
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div
        className="services-image"
        style={{ backgroundImage: `url(${cleanerImage})` }}
      ></div>
    </div>
  );
};

export default ServicesPage;
