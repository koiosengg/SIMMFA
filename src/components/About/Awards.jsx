import React, { useState } from "react";
import DesktopBackground from "../../assets/About/Awards/Desktop Background.png";

function Awards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="about-awards">
      <div className="home-courses-heading">
        <h2>
          Awards and
          <br className="desktop" />
          Recognitions
        </h2>
        <p>
          Showcasing the awards and accolades that represent our continuous
          pursuit of musical brilliance.
        </p>
      </div>

      <div className="about-awards-container">
        <div
          className={`about-awards-set ${
            activeIndex === 0 ? "active-about-awards-set" : ""
          }`}
          onClick={() => setActiveIndex(0)}
        >
          <img src={DesktopBackground} />
          <div className="about-awards-set-content">
            <p className="about-awards-set-number">01.</p>
            <hr />
            <div className="about-awards-set-text">
              <div className="about-awards-set-text-heading">
                <h3>Award 1</h3>
                <h4>Title</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tortor congue felis cras
                sed praesent neque faucibus. Dapibus elementum aliquam cursus
                lorem. Feugiat urna porttitor nibh ridiculus purus risus id a.
                Feugiat aliquam lectus ac faucibus quam turpis. Nulla enim
                viverra aliquam felis facilisis phasellus mauris. A ac ut
                tincidunt erat donec viverra egestas vel libero. Massa morbi
                libero consequat elit ultrices amet fermentum justo. Faucibus.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`about-awards-set ${
            activeIndex === 1 ? "active-about-awards-set" : ""
          }`}
          onClick={() => setActiveIndex(1)}
        >
          <img src={DesktopBackground} />
          <div className="about-awards-set-content">
            <p className="about-awards-set-number">02.</p>
            <hr />
            <div className="about-awards-set-text">
              <div className="about-awards-set-text-heading">
                <h3>Award 2</h3>
                <h4>Title</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tortor congue felis cras
                sed praesent neque faucibus. Dapibus elementum aliquam cursus
                lorem. Feugiat urna porttitor nibh ridiculus purus risus id a.
                Feugiat aliquam lectus ac faucibus quam turpis. Nulla enim
                viverra aliquam felis facilisis phasellus mauris. A ac ut
                tincidunt erat donec viverra egestas vel libero. Massa morbi
                libero consequat elit ultrices amet fermentum justo. Faucibus.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`about-awards-set ${
            activeIndex === 2 ? "active-about-awards-set" : ""
          }`}
          onClick={() => setActiveIndex(2)}
        >
          <img src={DesktopBackground} />
          <div className="about-awards-set-content">
            <p className="about-awards-set-number">03.</p>
            <hr />
            <div className="about-awards-set-text">
              <div className="about-awards-set-text-heading">
                <h3>Award 3</h3>
                <h4>Title</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tortor congue felis cras
                sed praesent neque faucibus. Dapibus elementum aliquam cursus
                lorem. Feugiat urna porttitor nibh ridiculus purus risus id a.
                Feugiat aliquam lectus ac faucibus quam turpis. Nulla enim
                viverra aliquam felis facilisis phasellus mauris. A ac ut
                tincidunt erat donec viverra egestas vel libero. Massa morbi
                libero consequat elit ultrices amet fermentum justo. Faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
