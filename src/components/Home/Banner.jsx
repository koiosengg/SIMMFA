import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Home/Banner/Desktop Background.png";

function Banner() {
  return (
    <section className="home-banner">
      <img
        src={DesktopBackground}
        alt="Desktop Banner Background"
        className="home-banner-background"
      />
      <div className="home-banner-container">
        <h1>
          Your Sound Journey
          <br />
          Starts Here
        </h1>
        <Link to="/courses" className="primary-button">
          Start Learning
        </Link>
      </div>
    </section>
  );
}

export default Banner;
