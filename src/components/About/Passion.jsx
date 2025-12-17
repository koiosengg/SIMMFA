import React from "react";
import Img1 from "../../assets/About/Passion/Img1.png";
import Img2 from "../../assets/About/Passion/Img2.png";

function Passion() {
  return (
    <section className="about-passion">
      <div className="about-passion-left">
        <div className="about-passion-left-heading">
          <h2>
            Where Passion Meets <br className="desktop" />
            Profession in Music
          </h2>
          <p>
            Welcome to SIMMFA, a leading music and creative arts institute in
            Bangalore offering Diploma, Degree, PG, and Certification Programs
            in Music, DJ, Music Production, Photography, Videography, and
            Modeling. Whether you're here to explore a new hobby or build a
            career, we help you discover your passion and turn it into
            profession.
          </p>
        </div>
        <div className="about-passion-left-content">
          <p>
            <span>100+</span>
            Courses
          </p>
          <p>
            <span>200+</span>
            Artists
          </p>
        </div>
      </div>
      <div className="about-passion-right">
        <img src={Img1} alt="Image 1" />
        <img src={Img2} alt="Image 2" />
      </div>
    </section>
  );
}

export default Passion;
