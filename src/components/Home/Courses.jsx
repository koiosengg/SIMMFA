import React from "react";
import { Link } from "react-router-dom";
import Course1 from "../../assets/Courses/Offered/Course1.png";
import Course2 from "../../assets/Courses/Offered/Course2.png";
import Course3 from "../../assets/Courses/Offered/Course3.png";
import Course4 from "../../assets/Courses/Offered/Course4.png";
import Star from "../../assets/Courses/Offered/Star.svg";
import Profile from "../../assets/Courses/Offered/Profile.svg";
import DesktopBackground from "../../assets/Home/Courses/Desktop Background.png"
function Courses() {
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
  ];

  return (
    <section className="home-courses">
      <div className="home-courses-heading">
        <h2>Our Courses</h2>
        <p>
          Discover structured courses that help you grow confidently in your
          musical journey.
        </p>
      </div>
      <div className="home-courses-container">
        <img src={DesktopBackground} className="home-courses-container-background"/>
        <div className="home-courses-sets">
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
        <Link to="/" className="primary-button">
          Browse all courses
        </Link>
      </div>
    </section>
  );
}

export default Courses;
