import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Course1 from "../../assets/Courses/Offered/Course1.png";
import Course2 from "../../assets/Courses/Offered/Course2.png";
import Course3 from "../../assets/Courses/Offered/Course3.png";
import Course4 from "../../assets/Courses/Offered/Course4.png";
import Course5 from "../../assets/Courses/Offered/Course5.jpg";
import Star from "../../assets/Courses/Offered/Star.svg";
import Profile from "../../assets/Courses/Offered/Profile.svg";

function Related() {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const coursesOffered = [
    {
      img: Course1,
      title: "Academic Programs",
      category: "DSMT",
      price: "₹5,00,000",
      rating: "5.0",
      students: "10K",
      link: "/courses/Academic-Programs",
    },
    {
      img: Course2,
      title: "Certificate Courses",
      category: "DSMT",
      price: "₹60,000",
      rating: "5.0",
      students: "10K",
      link: "/courses/Certification-Courses",
    },
    {
      img: Course3,
      title: "GRMP",
      category: "DSMT",
      price: "₹1,25,000",
      rating: "5.0",
      students: "10K",
      link: "/courses/Guaranteed-Result-Music-Program",
    },
    {
      img: Course4,
      title: "Hobby Subscriptions",
      category: "DSMT",
      price: "₹5,500",
      rating: "5.0",
      students: "10K",
      link: "/courses/Hobby-Subscriptions",
    },
    {
      img: Course5,
      title: "Advance Music Certification",
      category: "DSMT",
      price: "₹5,500",
      rating: "5.0",
      students: "10K",
      link: "/courses/Advance-Music-Certification",
    },
  ];

  const maxIndex = coursesOffered.length - 3;

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    setSlideWidth(width / 3 - 16 + 24);
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
    <section className="blogs-posts course-related">
      <div className="blogs-posts-heading">
        <h2>Our Recent Posts</h2>
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
          {coursesOffered.map((course, index) => (
            <Link to={course.link} className="courses-offered-set" key={index}>
              <div className="courses-offered-set-img">
                <img src={course.img} alt={course.title} />
              </div>
              <div className="courses-offered-set-content">
                <div className="courses-offered-set-price-and-cateogry">
                  <span>{course.category}</span>
                  <p>{course.price}</p>
                </div>
                <h3>{course.title}</h3>
                <div className="courses-offered-set-bottom">
                  <div className="courses-offered-set-bottom-set">
                    <img src={Star} alt="Star Icon" />
                    <p>{course.rating}</p>
                  </div>
                  <div className="courses-offered-set-bottom-set">
                    <img src={Profile} alt="Profile Icon" />
                    <p>
                      <span>{course.students}</span> students
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Related;
