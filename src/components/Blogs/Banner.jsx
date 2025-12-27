import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Courses/Banner/Desktop Background.png";
import MobileBackground from "../../assets/Courses/Banner/Mobile Background.png";

function Banner() {
  return (
    <section className="home-banner">
      <img
        src={DesktopBackground}
        alt="Desktop Banner Background"
        className="home-banner-background desktop"
      />
      <img
        src={MobileBackground}
        alt="Mobile Banner Background"
        className="home-banner-background mobile"
      />
      <div className="home-banner-container">
        <h1>
          The SIMMFA <br />
          Journal
        </h1>
        <Link to="/blogs" className="primary-button">
          Know More
        </Link>
      </div>
    </section>
  );
}

export default Banner;
