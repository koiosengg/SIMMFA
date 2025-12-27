import React from "react";
import DesktopBackground from "../../assets/Courses/Banner/Desktop Background.png";
import MobileBackground from "../../assets/Courses/Banner/Mobile Background.png"

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
        <h1>Unlock the World of Learning</h1>
        <div className="courses-banner-search-container">
          <div className="courses-banner-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
                stroke="#E2E2E2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.4434 16.4438L20.9997 21.0002"
                stroke="#E2E2E2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input placeholder="Explore Courses" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
