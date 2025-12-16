import React from "react";
import DesktopBackground from "../../assets/Home/Empire/Desktop Background.png";
import Img1 from "../../assets/Home/Empire/Img1.png";
import Img1Hover from "../../assets/Home/Empire/Img1 Hover.png";
import Img2 from "../../assets/Home/Empire/Img2.png";
import Img2Hover from "../../assets/Home/Empire/Img2 Hover.png";
import Img3 from "../../assets/Home/Empire/Img3.png";
import Img3Hover from "../../assets/Home/Empire/Img3 Hover.png";
import Img4 from "../../assets/Home/Empire/Img4.png";
import Img4Hover from "../../assets/Home/Empire/Img4 Hover.png";

function Empire() {
  return (
    <section className="home-empire">
      <div className="home-courses-heading">
        <h2>
          Build your music empire
          <br /> with us
        </h2>
        <p>
          Start your musical journey with expert guidance designed to shape your
          talent into lasting success.
        </p>
      </div>
      <div className="home-empire-container">
        <img
          src={DesktopBackground}
          alt="Desktop Background"
          className="home-empire-container-background"
        />
        <div className="home-empire-sets">
          <div className="home-empire-set-container">
            <div className="home-empire-set">
              <div className="home-empire-set-img">
                <img src={Img1} alt="Img 1" />
                <img src={Img1Hover} alt="Img 1" />
              </div>
              <div className="home-empire-set-text">
                <h3>Master Every Skill</h3>
                <p>
                  Our expert-led programs help you grow from beginner to pro
                  with clarity and confidence.
                </p>
              </div>
            </div>
          </div>
          <div className="home-empire-set-container">
            <div className="home-empire-set">
              <div className="home-empire-set-img">
                <img src={Img1} alt="Img 1" />
                <img src={Img1Hover} alt="Img 1" />
              </div>
              <div className="home-empire-set-text">
                <h3>Perform with purpose</h3>
                <p>
                  Gain real experience, build confidence, and learn what it
                  feels like to own the spotlight.
                </p>
              </div>
            </div>
          </div>
          <div className="home-empire-set-container">
            <div className="home-empire-set">
              <div className="home-empire-set-img">
                <img src={Img1} alt="Img 1" />
                <img src={Img1Hover} alt="Img 1" />
              </div>
              <div className="home-empire-set-text">
                <h3>Learn your way</h3>
                <p>
                  From one-on-one sessions to group classes, get a learning path
                  tailored to your goals.
                </p>
              </div>
            </div>
          </div>
          <div className="home-empire-set-container">
            <div className="home-empire-set">
              <div className="home-empire-set-img">
                <img src={Img1} alt="Img 1" />
                <img src={Img1Hover} alt="Img 1" />
              </div>
              <div className="home-empire-set-text">
                <h3>Join a Creative Community</h3>
                <p>
                  Collaborate with passionate musicians, learn together, and
                  grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Empire;
