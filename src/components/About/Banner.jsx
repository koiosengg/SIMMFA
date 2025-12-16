import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/About/Banner/Desktop Background.png";

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
          Where Passion Meets
          <br className="desktop" />
          Profession in Music
        </h1>
        <Link to="/courses" className="primary-button">
          Explore Courses
        </Link>
      </div>
    </section>
  );
}

export default Banner;
