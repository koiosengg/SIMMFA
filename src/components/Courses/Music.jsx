import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Courses/Music/Desktop Background.png";

function Music() {
  return (
    <section className="courses-music">
      <img src={DesktopBackground} alt="Desktop Background" />
      <div className="courses-music-container">
        <div className="courses-music-text">
          <h2>
            Let’s Make <span>Music </span>Together
          </h2>
          <p>Because music sounds better when we play it together</p>
        </div>
        <Link to="/" className="primary-button">
          Come Join us
        </Link>
      </div>
    </section>
  );
}

export default Music;
