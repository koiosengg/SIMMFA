import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../../assets/Courses/Course/Right Arrow.svg";
import Image from "../../../assets/Courses/Course/Certification Courses.jpg";
import RedCheck from "../../../assets/Courses/Course/Red Check.svg";
import Diploma from "../../../assets/Courses/Course/Diploma.svg";
import Degree from "../../../assets/Courses/Course/Degree.svg";
import Graduate from "../../../assets/Courses/Course/Graduate.svg";
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
import Feedback from "../../../assets/Courses/Course/Image.svg";
import RedStar from "../../../assets/Courses/Course/Red Star.svg";
import HalfRedStar from "../../../assets/Courses/Course/Half Red Star.svg";
import HollowRedStar from "../../../assets/Courses/Course/Hollow Red Star.svg";
import CourseLevel from "../../../assets/Courses/Course/Course Level.svg";
import Duration from "../../../assets/Courses/Course/Duration.svg";
import Language from "../../../assets/Courses/Course/Language.svg";
import Mode from "../../../assets/Courses/Course/Mode.svg";
import Location from "../../../assets/Courses/Course/Location.svg";
import RegistrationFee from "../../../assets/Courses/Course/Registration Fee.svg";
import Copy from "../../../assets/Courses/Course/Copy.svg";
import Facebook from "../../../assets/Courses/Course/Facebook.svg";
import Envelope from "../../../assets/Courses/Course/Envelope.svg";
import Whatsapp from "../../../assets/Courses/Course/Whatsapp.svg";
import Video from "../Video";
import Related from "../Related";

function CertificationCourses() {
  const [activeCategory, setActiveCategory] = useState("category1");
  const getScrollOffset = () => (window.innerWidth < 1200 ? 80 : 180);
  const [readMore, setReadMore] = useState(false);

  function handleReadMoreButton() {
    if (readMore === true) {
      setReadMore(false);
    } else setReadMore(true);
  }

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
                <span>Certification Courses</span>
              </div>
              <h1>Certification Courses</h1>
            </div>
            <p>
              Short-term professional programs offering hands-on training and
              certification in Music Production, DJing, Videography,
              Photography, and Sound Engineering.
            </p>
          </div>
          <img
            src={Image}
            alt="Certification Courses Image"
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
                The Certification Courses are short-term professional programs
                that provide learners with a formal credential in performance or
                production. Students can specialize in Music Production, DJing,
                Videography, Photography, or Sound Engineering, gaining both
                theory and practical experience.
              </p>
            </div>

            <div className="course-container-left-info-text" id="requirements">
              <h2>Course Requirements</h2>
              <ul>
                <li>Open to all music and media enthusiasts.</li>
                <li>
                  Basic familiarity with the chosen subject is helpful but not
                  mandatory.
                </li>
                <li>Access to required instruments or software tools.</li>
              </ul>
            </div>

            <div className="course-container-left-info-text" id="duration">
              <h2>Duration</h2>
              <p>6-9 months (Flexible, based on student’s pace)</p>
            </div>

            <div className="course-container-left-outcomes" id="outcomes">
              <h2>What will you learn in this course</h2>
              <div className="course-container-left-outcomes-points">
                <div className="course-container-left-outcomes-point">
                  <img src={RedCheck} alt="Red Check Icon" />
                  <p>Earn a recognized certificate from SIMMFA & Soundkraft.</p>
                </div>
                <div className="course-container-left-outcomes-point">
                  <img src={RedCheck} alt="Red Check Icon" />
                  <p>Strengthen your creative and technical abilities.</p>
                </div>
                <div className="course-container-left-outcomes-point">
                  <img src={RedCheck} alt="Red Check Icon" />
                  <p>Learn performance, composition, and production skills.</p>
                </div>
                <div className="course-container-left-outcomes-point">
                  <img src={RedCheck} alt="Red Check Icon" />
                  <p>Build a portfolio for future opportunities.</p>
                </div>
                <div className="course-container-left-outcomes-point">
                  <img src={RedCheck} alt="Red Check Icon" />
                  <p>Prepare for higher-level academic programs.</p>
                </div>
              </div>
            </div>

            <div className="course-container-left-info-text" id="fees">
              <h2>Fees Structure</h2>
              <p>Varies by specialization and duration</p>
            </div>

            <div className="course-container-left-feedback">
              <h2>Students Feedback</h2>
              <div className="course-container-left-feedback-container">
                <div className="course-container-left-feedback-set">
                  <img src={Feedback} className="feedback-person" />
                  <div className="course-container-left-feedback-set-info">
                    <div className="course-container-left-feedback-set-info-heading">
                      <div className="course-container-left-feedback-set-info-heading-text">
                        <h3>Pratiksha Devadiga</h3>
                        <span>•</span>
                        <span>1 week ago</span>
                      </div>
                      <div className="course-container-left-feedback-set-rating">
                        <img src={RedStar} alt="Red Star" />
                        <img src={RedStar} alt="Red Star" />
                        <img src={RedStar} alt="Red Star" />
                        <img src={RedStar} alt="Red Star" />
                        <img src={RedStar} alt="Red Star" />
                      </div>
                    </div>
                    <p>
                      I joined as a complete beginner in singing, and learning
                      under Vikash Sir has been a good experience. He makes the
                      learning process enjoyable and easy to follow. Within just
                      a few weeks, I've noticed significant improvement in my
                      voice control and confidence. This is truly a great place
                      to begin your musical journey!
                    </p>
                  </div>
                </div>
                <div className="course-container-left-feedback-set">
                  <img src={Feedback} className="feedback-person" />
                  <div className="course-container-left-feedback-set-info">
                    <div className="course-container-left-feedback-set-info-heading">
                      <div className="course-container-left-feedback-set-info-heading-text">
                        <h3>Amit Srivastava</h3>
                        <span>•</span>
                        <span>1 week ago</span>
                      </div>
                      <div className="course-container-left-feedback-set-rating">
                        <img src={RedStar} alt="Red Star" />
                        <img src={RedStar} alt="Red Star" />
                        <img src={RedStar} alt="Red Star" />
                        <img src={RedStar} alt="Red Star" />
                        <img src={RedStar} alt="Red Star" />
                      </div>
                    </div>
                    <p>
                      Good experience at Soundkraft. Teachers are good and
                      supportive. My kid is picking up well on guitar lessons
                    </p>
                  </div>
                </div>
                <div className="course-container-left-feedback-set">
                  <img src={Feedback} className="feedback-person" />
                  <div className="course-container-left-feedback-set-info">
                    <div className="course-container-left-feedback-set-info-heading">
                      <div className="course-container-left-feedback-set-info-heading-text">
                        <h3>Manasi Walvekar</h3>
                        <span>•</span>
                        <span>1 week ago</span>
                      </div>
                      <div className="course-container-left-feedback-set-rating">
                        <img src={RedStar} alt="Red Star" />
                        <img src={RedStar} alt="Red Star" />
                        <img src={RedStar} alt="Red Star" />
                        <img src={RedStar} alt="Red Star" />
                        <img src={RedStar} alt="Red Star" />
                      </div>
                    </div>
                    <p>
                      Very good. Paid individual attention. Appropriate
                      guidance. The teachers tell us exactly what mistake we
                      make which helps us correct the mistakes. All the
                      teacher's are friendly and encourage us well. Thank you.
                    </p>
                  </div>
                </div>
                {readMore && (
                  <>
                    <div className="course-container-left-feedback-set">
                      <img src={Feedback} className="feedback-person" />
                      <div className="course-container-left-feedback-set-info">
                        <div className="course-container-left-feedback-set-info-heading">
                          <div className="course-container-left-feedback-set-info-heading-text">
                            <h3>Preetish Patnaik</h3>
                            <span>•</span>
                            <span>1 week ago</span>
                          </div>
                          <div className="course-container-left-feedback-set-rating">
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                          </div>
                        </div>
                        <p>
                          I felt supported and at home as soon as I went through
                          the doors. The faculty and staff are extremely
                          patient, competent, and enthusiastic about music,
                          which adds to the effectiveness and enjoyment of the
                          learning process.
                          <br />
                          <br /> All ages and ability levels are catered to with
                          an astounding variety of classes available. There is
                          something for every level of musician, from novice to
                          expert. I especially value the individualized teaching
                          strategy. My progress was substantially expedited
                          because my instructor took the time to learn my goals
                          and customized the courses accordingly.
                        </p>
                      </div>
                    </div>
                    <div className="course-container-left-feedback-set">
                      <img src={Feedback} className="feedback-person" />
                      <div className="course-container-left-feedback-set-info">
                        <div className="course-container-left-feedback-set-info-heading">
                          <div className="course-container-left-feedback-set-info-heading-text">
                            <h3>Rohit Sai Vijayakumar</h3>
                            <span>•</span>
                            <span>1 week ago</span>
                          </div>
                          <div className="course-container-left-feedback-set-rating">
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                          </div>
                        </div>
                        <p>
                          It's been a great experience learning in soundkraft
                          solutions. I have been going for the keyboard course
                          for the past 4 months . The staff members are really
                          helping.
                          <br /> It would be really better if they hire more
                          trainers for more focus on each students who come here
                          with aspiration for music.
                        </p>
                      </div>
                    </div>
                    <div className="course-container-left-feedback-set">
                      <img src={Feedback} className="feedback-person" />
                      <div className="course-container-left-feedback-set-info">
                        <div className="course-container-left-feedback-set-info-heading">
                          <div className="course-container-left-feedback-set-info-heading-text">
                            <h3>Anand A</h3>
                            <span>•</span>
                            <span>1 week ago</span>
                          </div>
                          <div className="course-container-left-feedback-set-rating">
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                          </div>
                        </div>
                        <p>
                          Great institution for learning instruments and vocals.
                          Vikas sir is the best encouraging all age groups to
                          develop their passion.
                        </p>
                      </div>
                    </div>
                    <div className="course-container-left-feedback-set">
                      <img src={Feedback} className="feedback-person" />
                      <div className="course-container-left-feedback-set-info">
                        <div className="course-container-left-feedback-set-info-heading">
                          <div className="course-container-left-feedback-set-info-heading-text">
                            <h3>Kumar Ritesh</h3>
                            <span>•</span>
                            <span>1 week ago</span>
                          </div>
                          <div className="course-container-left-feedback-set-rating">
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                          </div>
                        </div>
                        <p>
                          My son is leaving keyboard. Staff are really friendly
                          and helping. Vikas sir is monitoring the overall
                          progress and keeps us updated with progressm ipsum
                          dolor sit amet consectetur.
                        </p>
                      </div>
                    </div>
                    <div className="course-container-left-feedback-set">
                      <img src={Feedback} className="feedback-person" />
                      <div className="course-container-left-feedback-set-info">
                        <div className="course-container-left-feedback-set-info-heading">
                          <div className="course-container-left-feedback-set-info-heading-text">
                            <h3>Srija Kommajosyula</h3>
                            <span>•</span>
                            <span>1 week ago</span>
                          </div>
                          <div className="course-container-left-feedback-set-rating">
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                          </div>
                        </div>
                        <p>
                          I have been associated with Soundkraft for the past 7
                          months, and the learning experience has been great.
                          They will always teach you each subject with good
                          depth and you will understand the concept easily.
                          Would suggest you guys learn sheet music from this
                          institution, as it will help you understand music
                          better
                        </p>
                      </div>
                    </div>
                    <div className="course-container-left-feedback-set">
                      <img src={Feedback} className="feedback-person" />
                      <div className="course-container-left-feedback-set-info">
                        <div className="course-container-left-feedback-set-info-heading">
                          <div className="course-container-left-feedback-set-info-heading-text">
                            <h3>Bharath Nayak</h3>
                            <span>•</span>
                            <span>1 week ago</span>
                          </div>
                          <div className="course-container-left-feedback-set-rating">
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                            <img src={RedStar} alt="Red Star" />
                          </div>
                        </div>
                        <p>
                          The class had an amazing energy, and the teacher kept
                          everyone engaged. It’s great for all ages and levels
                          Thanks Bikash sir.
                        </p>
                      </div>
                    </div>
                  </>
                )}
                <button
                  onClick={handleReadMoreButton}
                  className="secondary-button"
                >
                  {!readMore ? "Load More" : "See Less"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="course-container-right">
          <div className="course-container-right-details">
            <div className="course-container-right-details-set">
              <div className="course-container-right-details-set-label">
                <img src={CourseLevel} alt="Course Level" />
                <span>Course Level</span>
              </div>
              <p>Beginner-Advanced</p>
            </div>
            <div className="course-container-right-details-set">
              <div className="course-container-right-details-set-label">
                <img src={Duration} alt="Duration" />
                <span>Duration</span>
              </div>
              <p>12-15 months</p>
            </div>
            <div className="course-container-right-details-set">
              <div className="course-container-right-details-set-label">
                <img src={Language} alt="Language" />
                <span>Language</span>
              </div>
              <p>Hindi & English</p>
            </div>
            <div className="course-container-right-details-set">
              <div className="course-container-right-details-set-label">
                <img src={Mode} alt="Mode" />
                <span>Mode</span>
              </div>
              <p>Online / Offline</p>
            </div>
            <div className="course-container-right-details-set">
              <div className="course-container-right-details-set-label">
                <img src={Location} alt="Location" />
                <span>Location</span>
              </div>
              <p>Bengaluru</p>
            </div>
          </div>
          <hr />
          <div className="course-container-right-register">
            <button className="primary-button">Register now</button>
          </div>
          <hr />
          <div className="course-container-left-fees-category-sidebar-instruments">
            <h4>This course includes:</h4>
            <div className="course-container-left-fees-category-sidebar-instruments-points">
              <div className="course-container-left-fees-category-sidebar-instruments-point">
                <img src={Diploma} alt="Diploma" />
                <p>Diploma</p>
              </div>
              <div className="course-container-left-fees-category-sidebar-instruments-point">
                <img src={Degree} alt="Degree" />
                <p>Degree</p>
              </div>
              <div className="course-container-left-fees-category-sidebar-instruments-point">
                <img src={Graduate} alt="Post Graduate" />
                <p>Post Graduate</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="course-container-right-share">
            <h4>Share this course:</h4>
            <div className="course-container-right-share-buttons">
              <a href="#" target="_blank">
                <img src={Copy} alt="Copy Icon" />
                <p>Copy link</p>
              </a>
              <a href="#" target="_blank">
                <img src={Facebook} alt="Facebook Icon" />
              </a>
              <a href="#" target="_blank">
                <img src={Envelope} alt="Envelope Icon" />
              </a>
              <a href="#" target="_blank">
                <img src={Whatsapp} alt="Whatsapp Icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="course-rating">
        <h2>Course Rating</h2>
        <div className="course-rating-container">
          <div className="course-rating-container-left">
            <h3>4.8</h3>
            <div className="course-rating-container-left-content">
              <div className="course-rating-container-left-stars">
                <img src={RedStar} alt="Red Star Icon" />
                <img src={RedStar} alt="Red Star Icon" />
                <img src={RedStar} alt="Red Star Icon" />
                <img src={RedStar} alt="Red Star Icon" />
                <img src={HalfRedStar} alt="Half Red Star Icon" />
              </div>
              <p>Course Rating</p>
            </div>
          </div>
          <div className="course-rating-container-right">
            <div className="course-rating-container-right-set">
              <div className="course-rating-container-left-stars">
                <img src={RedStar} alt="Red Star Icon" />
                <img src={RedStar} alt="Red Star Icon" />
                <img src={RedStar} alt="Red Star Icon" />
                <img src={RedStar} alt="Red Star Icon" />
                <img src={RedStar} alt="Red Star Icon" />
              </div>
              <div className="course-rating-container-right-progress">
                <div className="course-rating-container-right-progress-bar">
                  <div
                    className="course-rating-container-right-progress-line"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p>75%</p>
              </div>
            </div>
            <div className="course-rating-container-right-set">
              <div className="course-rating-container-left-stars">
                <img src={RedStar} alt="Red Star Icon" />
                <img src={RedStar} alt="Red Star Icon" />
                <img src={RedStar} alt="Red Star Icon" />
                <img src={RedStar} alt="Red Star Icon" />
                <img src={HollowRedStar} alt="Hollow Red Star Icon" />
              </div>
              <div className="course-rating-container-right-progress">
                <div className="course-rating-container-right-progress-bar">
                  <div
                    className="course-rating-container-right-progress-line"
                    style={{ width: "21%" }}
                  ></div>
                </div>
                <p>21%</p>
              </div>
            </div>
            <div className="course-rating-container-right-set">
              <div className="course-rating-container-left-stars">
                <img src={RedStar} alt="Red Star Icon" />
                <img src={RedStar} alt="Red Star Icon" />
                <img src={RedStar} alt="Red Star Icon" />
                <img src={HollowRedStar} alt="Hollow Red Star Icon" />
                <img src={HollowRedStar} alt="Hollow Red Star Icon" />
              </div>
              <div className="course-rating-container-right-progress">
                <div className="course-rating-container-right-progress-bar">
                  <div
                    className="course-rating-container-right-progress-line"
                    style={{ width: "3%" }}
                  ></div>
                </div>
                <p>3%</p>
              </div>
            </div>
            <div className="course-rating-container-right-set">
              <div className="course-rating-container-left-stars">
                <img src={RedStar} alt="Red Star Icon" />
                <img src={RedStar} alt="Red Star Icon" />
                <img src={HollowRedStar} alt="Hollow Red Star Icon" />
                <img src={HollowRedStar} alt="Hollow Red Star Icon" />
                <img src={HollowRedStar} alt="Hollow Red Star Icon" />
              </div>
              <div className="course-rating-container-right-progress">
                <div className="course-rating-container-right-progress-bar">
                  <div
                    className="course-rating-container-right-progress-line"
                    style={{ width: "1%" }}
                  ></div>
                </div>
                <p>1%</p>
              </div>
            </div>
            <div className="course-rating-container-right-set">
              <div className="course-rating-container-left-stars">
                <img src={RedStar} alt="Red Star Icon" />
                <img src={HollowRedStar} alt="Hollow Red Star Icon" />
                <img src={HollowRedStar} alt="Hollow Red Star Icon" />
                <img src={HollowRedStar} alt="Hollow Red Star Icon" />
                <img src={HollowRedStar} alt="Hollow Red Star Icon" />
              </div>
              <div className="course-rating-container-right-progress">
                <div className="course-rating-container-right-progress-bar">
                  <div
                    className="course-rating-container-right-progress-line"
                    style={{ width: "0.5%" }}
                  ></div>
                </div>
                <p>&lt;1%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Video />
      <Related />
    </>
  );
}

export default CertificationCourses;
