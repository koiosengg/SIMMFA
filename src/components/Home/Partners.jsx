import React from "react";
import Forum from "../../assets/Home/Partners/Forum.png";
import Trinity from "../../assets/Home/Partners/Trinity.png";
import RSL from "../../assets/Home/Partners/RSL.png";
import Yamaha from "../../assets/Home/Partners/Yamaha.png";
import Birla from "../../assets/Home/Partners/Birla.png";
import LCM from "../../assets/Home/Partners/LCM.png";
import Apollo from "../../assets/Home/Partners/Apollo.png";
import Manjeera from "../../assets/Home/Partners/Manjeera.png";
import ABGMV from "../../assets/Home/Partners/ABGMV.png";
import Airtel from "../../assets/Home/Partners/Airtel.png";
import Hyderabad from "../../assets/Home/Partners/Hyderabad.png";

function Partners() {
  return (
    <section className="home-partners">
      <div className="home-courses-heading">
        <h2>
          Internationally Recognized
          <br className="desktop" /> Music Affiliations
        </h2>
        <p>
          Along with other globally recognized music institutions and
          universities
        </p>
      </div>

      <div className="home-affiliations-logos">
        <div className="home-affiliations-logo">
          <img src={Forum} alt="Forum" />
        </div>
        <div className="home-affiliations-logo">
          <img src={Trinity} alt="Trinity" />
        </div>
        <div className="home-affiliations-logo">
          <img src={RSL} alt="RSL" />
        </div>
        <div className="home-affiliations-logo">
          <img src={Yamaha} alt="Yamaha" />
        </div>
        <div className="home-affiliations-logo">
          <img src={Birla} alt="Birla" />
        </div>
        <div className="home-affiliations-logo">
          <img src={LCM} alt="LCM" />
        </div>
        <div className="home-affiliations-logo">
          <img src={Apollo} alt="Apollo" />
        </div>
        <div className="home-affiliations-logo">
          <img src={Manjeera} alt="Manjeera" />
        </div>
        <div className="home-affiliations-logo">
          <img src={ABGMV} alt="ABGMV" />
        </div>
        <div className="home-affiliations-logo">
          <img src={Airtel} alt="Airtel" />
        </div>
        <div className="home-affiliations-logo">
          <img src={Hyderabad} alt="Hyderabad" />
        </div>
      </div>
    </section>
  );
}

export default Partners;
