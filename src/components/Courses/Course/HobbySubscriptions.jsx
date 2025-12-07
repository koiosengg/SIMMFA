import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../../assets/Courses/Course/Right Arrow.svg";
import Image from "../../../assets/Courses/Course/Hobby Subscriptions.jpg";
import RedCheck from "../../../assets/Courses/Course/Red Check.svg";
import BeginnerCategory1 from "../../../assets/Courses/Course/Beginner Category 1.png";
import IntermediateCategory1 from "../../../assets/Courses/Course/Intermediate Category 1.png";
import AdvancedCategory1 from "../../../assets/Courses/Course/Advanced Category 1.png";
import BeginnerCategory2 from "../../../assets/Courses/Course/Beginner Category 2.png";
import IntermediateCategory2 from "../../../assets/Courses/Course/Intermediate Category 2.png";
import AdvancedCategory2 from "../../../assets/Courses/Course/Advanced Category 2.png";
import Vocals from "../../../assets/Courses/Course/Vocals.svg";
import Flute from "../../../assets/Courses/Course/Flute.svg";
import Drums from "../../../assets/Courses/Course/Drums.svg";
import Violin from "../../../assets/Courses/Course/Violin.svg";
import Piano from "../../../assets/Courses/Course/Piano.svg";
import Saxophone from "../../../assets/Courses/Course/Saxophone.svg";
import Guitar from "../../../assets/Courses/Course/Guitar.svg";
import Keyboard from "../../../assets/Courses/Course/Keyboard.svg";
import Ukelele from "../../../assets/Courses/Course/Ukelele.svg";
import Harmonium from "../../../assets/Courses/Course/Harmonium.svg";

function HobbySubscriptions() {
  const [activeCategory, setActiveCategory] = useState("category1");
  const getScrollOffset = () => (window.innerWidth < 1200 ? 80 : 180);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "requirements", label: "Requirements" },
    { id: "outcomes", label: "Outcomes" },
    { id: "fees", label: "Fees" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = getScrollOffset();
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="course-container">
        <div className="course-container-left">
          <div className="course-container-left-heading-container">
            <div className="course-container-left-heading">
              <div className="course-container-breadcrumb">
                <Link to="/">Home</Link>
                <img src={RightArrow} alt="Right Arrow" />
                <Link to="/courses">Courses</Link>
                <img src={RightArrow} alt="Right Arrow" />
                <span>Hobby Subscriptions</span>
              </div>
              <h1>Hobby Subscriptions</h1>
            </div>
            <p>
              These programs are ideal for anyone starting their musical journey
              or exploring music as a hobby
            </p>
          </div>
          <img
            src={Image}
            alt="Hobby Subscriptions Image"
            className="course-container-left-img"
          />
          <div className="course-container-left-info">
            <div className="course-container-left-info-tabs">
              {tabs.map(({ id, label }) => (
                <button
                  key={id}
                  className="course-container-left-info-tab"
                  onClick={() => scrollToSection(id)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="course-container-left-info-text" id="overview">
              <h2>Overview</h2>
              <p>
                The Hobby Course is perfect for anyone who wants to experience
                the joy of music without long-term commitment. Students can
                choose from instruments like Guitar, Keyboard, Piano, Drums,
                Violin, Flute, Harmonium, Ukulele, or Vocals and learn at their
                own pace with flexible scheduling.
              </p>
            </div>

            <div className="course-container-left-info-text" id="requirements">
              <h2>Course Requirements</h2>
              <ul>
                <li>Open to all age groups.</li>
                <li>No prior experience required.</li>
                <li>
                  Students must have their own instrument for home practice.
                </li>
                <li>Regular attendance and practice encouraged.</li>
              </ul>
            </div>

            <div className="course-container-left-info-text" id="duration">
              <h2>Duration</h2>
              <ul>
                <li> 3 Months – Beginner Level </li>
                <li>7 Months – Intermediate Level</li>
                <li>12 Months – Advanced Level </li>
              </ul>
              <span>(2 classes per week × 1 hour each)</span>
            </div>

            <div className="course-container-left-outcomes" id="outcomes">
              <h2>What will you learn in this course</h2>
              <div className="course-container-left-outcomes-points">
                <div className="course-container-left-outcomes-point">
                  <img src={RedCheck} alt="Red Check Icon" />
                  <p>Play and sing your favorite songs confidently.</p>
                </div>
                <div className="course-container-left-outcomes-point">
                  <img src={RedCheck} alt="Red Check Icon" />
                  <p>Understand rhythm, melody, and basic chords.</p>
                </div>
                <div className="course-container-left-outcomes-point">
                  <img src={RedCheck} alt="Red Check Icon" />
                  <p>Improve focus, discipline, and creativity.</p>
                </div>
                <div className="course-container-left-outcomes-point">
                  <img src={RedCheck} alt="Red Check Icon" />
                  <p>Gain comfort performing solo or with peers. </p>
                </div>
                <div className="course-container-left-outcomes-point">
                  <img src={RedCheck} alt="Red Check Icon" />
                  <p>Build a lifelong appreciation for music.</p>
                </div>
              </div>
            </div>

            <div className="course-container-left-fees" id="fees">
              <h2>Fees Structure</h2>
              <div className="course-container-left-fees-buttons">
                <button
                  className={` ${
                    activeCategory === "category1" ? "active-button" : ""
                  }`}
                  onClick={() => setActiveCategory("category1")}
                >
                  Category 1
                </button>
                <button
                  className={` ${
                    activeCategory === "category2" ? "active-button" : ""
                  }`}
                  onClick={() => setActiveCategory("category2")}
                >
                  Category 2
                </button>
              </div>

              {activeCategory === "category1" && (
                <div className="course-container-left-fees-category course-container-left-fees-category-1">
                  <div className="course-container-left-fees-category-sidebar">
                    <div className="course-container-left-fees-category-sidebar-price">
                      <img src={BeginnerCategory1} alt="Beginner" />
                      <h3>Beginner</h3>
                      <p>
                        <span>₹5,500</span>/ per month
                      </p>
                    </div>
                    <Link to="/" className="primary-button">
                      Get Started
                    </Link>
                    <hr />
                    <div className="course-container-left-fees-category-sidebar-instruments">
                      <h4>Instrument Category</h4>
                      <div className="course-container-left-fees-category-sidebar-instruments-points">
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Vocals} alt="Vocals" />
                          <p>Vocals</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Flute} alt="Flute" />
                          <p>Flute</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Drums} alt="Drums" />
                          <p>Drums</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Violin} alt="Violin" />
                          <p>Violin</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Piano} alt="Piano" />
                          <p>Piano</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Saxophone} alt="Saxophone" />
                          <p>Saxophone</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course-container-left-fees-category-sidebar">
                    <div className="course-container-left-fees-category-sidebar-price">
                      <img src={IntermediateCategory1} alt="Intermediate" />
                      <h3>Intermediate</h3>
                      <p>
                        <span>₹32,725</span>/ 7 months
                      </p>
                    </div>
                    <Link to="/" className="primary-button">
                      Get Started
                    </Link>
                    <hr />
                    <div className="course-container-left-fees-category-sidebar-instruments">
                      <h4>Instrument Category</h4>
                      <div className="course-container-left-fees-category-sidebar-instruments-points">
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Vocals} alt="Vocals" />
                          <p>Vocals</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Flute} alt="Flute" />
                          <p>Flute</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Drums} alt="Drums" />
                          <p>Drums</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Violin} alt="Violin" />
                          <p>Violin</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Piano} alt="Piano" />
                          <p>Piano</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Saxophone} alt="Saxophone" />
                          <p>Saxophone</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course-container-left-fees-category-sidebar">
                    <div className="course-container-left-fees-category-sidebar-price">
                      <img src={AdvancedCategory1} alt="Advanced" />
                      <h3>Advanced</h3>
                      <p>
                        <span>₹52,800</span>/ anually
                      </p>
                    </div>
                    <Link to="/" className="primary-button">
                      Get Started
                    </Link>
                    <hr />
                    <div className="course-container-left-fees-category-sidebar-instruments">
                      <h4>Instrument Category</h4>
                      <div className="course-container-left-fees-category-sidebar-instruments-points">
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Vocals} alt="Vocals" />
                          <p>Vocals</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Flute} alt="Flute" />
                          <p>Flute</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Drums} alt="Drums" />
                          <p>Drums</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Violin} alt="Violin" />
                          <p>Violin</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Piano} alt="Piano" />
                          <p>Piano</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Saxophone} alt="Saxophone" />
                          <p>Saxophone</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeCategory === "category2" && (
                <div className="course-container-left-fees-category course-container-left-fees-category-1">
                  <div className="course-container-left-fees-category-sidebar">
                    <div className="course-container-left-fees-category-sidebar-price">
                      <img src={BeginnerCategory2} alt="Beginner" />
                      <h3>Beginner</h3>
                      <p>
                        <span>₹4,500</span>/ per month
                      </p>
                    </div>
                    <Link to="/" className="primary-button">
                      Get Started
                    </Link>
                    <hr />
                    <div className="course-container-left-fees-category-sidebar-instruments">
                      <h4>Instrument Category</h4>
                      <div className="course-container-left-fees-category-sidebar-instruments-points">
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Guitar} alt="Guitar" />
                          <p>Guitar</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Keyboard} alt="Keyboard" />
                          <p>Keyboard</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Ukelele} alt="Ukelele" />
                          <p>Ukelele</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Harmonium} alt="Harmonium" />
                          <p>Harmonium</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course-container-left-fees-category-sidebar">
                    <div className="course-container-left-fees-category-sidebar-price">
                      <img src={IntermediateCategory2} alt="Intermediate" />
                      <h3>Intermediate</h3>
                      <p>
                        <span>₹28,560</span>/ 7 months
                      </p>
                    </div>
                    <Link to="/" className="primary-button">
                      Get Started
                    </Link>
                    <hr />
                    <div className="course-container-left-fees-category-sidebar-instruments">
                      <h4>Instrument Category</h4>
                      <div className="course-container-left-fees-category-sidebar-instruments-points">
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Guitar} alt="Guitar" />
                          <p>Guitar</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Keyboard} alt="Keyboard" />
                          <p>Keyboard</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Ukelele} alt="Ukelele" />
                          <p>Ukelele</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Harmonium} alt="Harmonium" />
                          <p>Harmonium</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course-container-left-fees-category-sidebar">
                    <div className="course-container-left-fees-category-sidebar-price">
                      <img src={AdvancedCategory2} alt="Advanced" />
                      <h3>Advanced</h3>
                      <p>
                        <span>₹46,080</span>/ anually
                      </p>
                    </div>
                    <Link to="/" className="primary-button">
                      Get Started
                    </Link>
                    <hr />
                    <div className="course-container-left-fees-category-sidebar-instruments">
                      <h4>Instrument Category</h4>
                      <div className="course-container-left-fees-category-sidebar-instruments-points">
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Guitar} alt="Guitar" />
                          <p>Guitar</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Keyboard} alt="Keyboard" />
                          <p>Keyboard</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Ukelele} alt="Ukelele" />
                          <p>Ukelele</p>
                        </div>
                        <div className="course-container-left-fees-category-sidebar-instruments-point">
                          <img src={Harmonium} alt="Harmonium" />
                          <p>Harmonium</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HobbySubscriptions;
