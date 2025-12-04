import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Facebook from "/Facebook.svg";
import Youtube from "/Youtube.svg";
import Instagram from "/Instagram.svg";

function Challenges() {
  const icons = [Instagram, Facebook, Youtube];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIconIndex((prev) => (prev + 1) % icons.length);
        setIsVisible(true);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="challenges">
      <div className="challenges-container">
        <h2>
          The story of tomorrow starts with{" "}
          <img
            src={icons[currentIconIndex]}
            alt="social icon"
            className={isVisible ? "fade-in" : "fade-out"}
          />{" "}
          and you.
        </h2>
        <p>
          Let us know what challenges you are trying to solve so we can help.
        </p>
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M1 13H23.2857M13 1L25 13L13 25"
              stroke="#CC3102"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default Challenges;
