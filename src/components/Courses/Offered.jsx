import React from "react";
import { Link } from "react-router-dom";
import Course1 from "../../assets/Courses/Offered/Course1.png";
import Course2 from "../../assets/Courses/Offered/Course2.png";
import Course3 from "../../assets/Courses/Offered/Course3.png";
import Course4 from "../../assets/Courses/Offered/Course4.png";
import Course5 from "../../assets/Courses/Offered/Course5.jpg";
import Star from "../../assets/Courses/Offered/Star.svg";
import Profile from "../../assets/Courses/Offered/Profile.svg";

function Offered() {
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

  return (
    <section className="courses-offered">
      <div className="courses-offered-heading">
        <h2>Courses Offered</h2>
        <p>
          Dive into diverse music courses that guide you step by step, whether
          you're beginning your journey or advancing your skills to a
          professional level.
        </p>
      </div>
      <div className="courses-offered-actions">
        <div className="courses-offered-actions-top">
          <div className="courses-offered-actions-top-left">
            <button>
              <div className="courses-offered-actions-top-left-filter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 11.25L12 20.25"
                    stroke="#B0B0B0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 3.75L12 8.25"
                    stroke="#B0B0B0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.75 18.75L18.7501 20.25"
                    stroke="#B0B0B0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.7501 3.75L18.75 15.75"
                    stroke="#B0B0B0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 15.75H16.5"
                    stroke="#B0B0B0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.25007 15.75L5.25 20.25"
                    stroke="#B0B0B0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.25 3.75L5.25007 12.75"
                    stroke="#B0B0B0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 12.75H7.5"
                    stroke="#B0B0B0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.25 8.25H9.75"
                    stroke="#B0B0B0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Filter</p>
              </div>
              <span>3</span>
            </button>
            <div className="courses-offered-actions-top-left-input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
                  stroke="#B0B0B0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.4434 16.4438L20.9997 21.0002"
                  stroke="#B0B0B0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input placeholder="Diploma in Music" />
            </div>
          </div>
          <div className="courses-offered-actions-top-right">
            <p>Sort by:</p>
            <select name="courseSort" id="courseSort">
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="high-rated">Highest Rated</option>
              <option value="low-price">Price: Low to High</option>
              <option value="high-price">Price: High to Low</option>
              <option value="az">A → Z</option>
              <option value="za">Z → A</option>
            </select>
          </div>
        </div>
        <div className="courses-offered-actions-bottom">
          <div className="courses-offered-actions-bottom-left">
            <p>Suggestion:</p>
            <span>Diploma</span>
            <span>Combo</span>
          </div>
          <p>
            25 <span>results find for “Diploma in music”</span>
          </p>
        </div>
      </div>
      <div className="courses-offered-container">
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
    </section>
  );
}

export default Offered;
