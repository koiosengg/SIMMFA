import React from "react";
import Trinity from "../../assets/Home/Affilliations/Trinity.png";
import RSL from "../../assets/Home/Affilliations/RSL.png";
import WL from "../../assets/Home/Affilliations/West London.png";

function Affiliations() {
  return (
    <section className="home-affiliations">
      <div className="home-courses-heading">
        <h2>
          Internationally Recognized
          <br /> Music Affiliations
        </h2>
        <p>
          Along with other globally recognized music institutions and
          universities
        </p>
      </div>
      <div className="home-affiliations-logos">
        <div className="home-affiliations-logo">
          <img src={Trinity} alt="Trinity" />
        </div>
        <div className="home-affiliations-logo">
          <img src={RSL} alt="RSL" />
        </div>
        <div className="home-affiliations-logo">
          <img src={WL} alt="West London" />
        </div>
      </div>
    </section>
  );
}

export default Affiliations;
