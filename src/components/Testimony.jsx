import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Person from "../assets/Testimony/Person.svg";

function Testimony() {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const blogPosts = [
    {
      img: Person,
      title: "Header",
      testimonial:
        "I felt supported and at home as soon as I went through the doors. The faculty and staff are extremely patient, competent, and enthusiastic about music, which adds...",
    },
    {
      img: Person,
      title: "Header",
      testimonial:
        "I felt supported and at home as soon as I went through the doors. The faculty and staff are extremely patient, competent, and enthusiastic about music, which adds...",
    },
    {
      img: Person,
      title: "Header",
      testimonial:
        "I felt supported and at home as soon as I went through the doors. The faculty and staff are extremely patient, competent, and enthusiastic about music, which adds...",
    },
    {
      img: Person,
      title: "Header",
      testimonial:
        "I felt supported went through the doors. The faculty and staff are extremely patient, competent, and enthusiastic about music, which adds...",
    },
    {
      img: Person,
      title: "Header",
      testimonial:
        "I felt supported and at home as soon as I went through the doors. The faculty and staff are extremely patient, competent, and enthusiastic about music, which adds...",
    },
    {
      img: Person,
      title: "Header",
      testimonial:
        "I felt supported and at home as soon as I went through the doors. The faculty and staff are extremely patient, competent, and enthusiastic about music, which adds...",
    },
  ];

  const maxIndex = blogPosts.length - 2;

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    setSlideWidth((width - 320) / 2 - 12 + 24);
  }, []);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * slideWidth
      }px)`;
      sliderRef.current.style.transition = "0.4s ease";
    }
  }, [currentIndex, slideWidth]);

  return (
    <section className="blogs-posts testimony">
      <div className="blogs-posts-heading">
        <h2>
          What are <br className="desktop" />
          they saying
        </h2>
        <div className="blogs-posts-buttons">
          <div
            className={`blogs-posts-button ${
              currentIndex === 0 ? "disabled" : ""
            }`}
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.57031 5.92993L3.50031 11.9999L9.57031 18.0699"
                stroke="#F8F8F8"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5 12H3.67"
                stroke="#F8F8F8"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className={`blogs-posts-button ${
              currentIndex === maxIndex ? "disabled" : ""
            }`}
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699"
                stroke="#F8F8F8"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 12H20.33"
                stroke="#F8F8F8"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="blogs-posts-container" ref={containerRef}>
        <div className="blogs-posts-slider" ref={sliderRef}>
          {blogPosts.map((post, index) => (
            <div className="testimony-set" key={index}>
              <div className="testimony-set-heading">
                <img src={post.img} alt={post.title} /> <h3>{post.title}</h3>
              </div>
              <p>{post.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimony;
