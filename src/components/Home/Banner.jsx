import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Home/Banner/Desktop Background.png";
import Guitar from "../../assets/Home/Banner/Guitar.png";

function Banner() {
  const bannerRef = useRef(null);
  const endRef = useRef(null);
  const [lineCount, setLineCount] = useState(0);

useEffect(() => {
  const calculateLines = () => {
    if (!bannerRef.current || !endRef.current) return;

    const bannerWidth = bannerRef.current.offsetWidth;
    const endWidth = endRef.current.offsetWidth;

    const usableWidth = bannerWidth - 2 * endWidth;
    let count = Math.floor(usableWidth / 30);

    if (window.innerWidth >= 1200) {
      count = 30;
    } else {
      count = 15;
    }

    setLineCount(count);
  };

  calculateLines();
  window.addEventListener("resize", calculateLines);

  return () => window.removeEventListener("resize", calculateLines);
}, []);


  return (
    <section className="home-banner" ref={bannerRef}>
      <img
        src={DesktopBackground}
        alt="Desktop Banner Background"
        className="home-banner-background"
      />

      <div className="home-banner-music">
        <div className="home-banner-music-end" ref={endRef}>
          <span></span>
          <div className="home-banner-music-end-line"></div>
        </div>

        {Array.from({ length: lineCount }).map((_, index) => {
          const delay = Math.random() * 2;
          const duration = 1.2 + Math.random() * 1.5;

          return (
            <div
              key={index}
              className="home-banner-music-line"
              style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}

        <div className="home-banner-music-end">
          <div className="home-banner-music-end-line"></div>
          <span></span>
        </div>
      </div>

      <img src={Guitar} alt="Guitar Image" className="home-banner-guitar" />

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
