import React, { useState } from "react";
import DesktopBanner from "../../../assets/Blogs/Blog/Blog1/Desktop Banner.png";
import Posts from "../Posts";

function Blog1() {
  const [readMore, setReadMore] = useState(false);

  function handleReadMoreButton() {
    if (readMore === true) {
      setReadMore(false);
    } else setReadMore(true);
  }

  return (
    <>
      <section className="blog-banner">
        <img src={DesktopBanner} alt="Desktop Banner" />
        <h1>
          How Photography and Audio Work <br className="desktop" />
          Together in Multimedia
        </h1>
      </section>
      <section className="blog-container">
        <div className="blog-left">
          <div className="blog-introduction">
            <h2>Introduction</h2>
            <p>
              In today's world, content isn't king , experience is. And to
              create something people actually feel, you need more than visuals.
              You need sound. That’s why photography and sound design are
              becoming two sides of the same creative coin. You can’t expect
              your visuals to hit hard if the sound behind them doesn’t carry
              its weight. Try this: mute your favorite movie scene. That
              tension? Gone. That emotion? Faded. Now do the reverse , keep the
              music, lose the visuals , and you’ll still feel something. That’s
              how much audio matters.
              <br /> This is exactly what we explore at <u>SoundKraft</u> , the
              fusion of sight and sound that turns ordinary into unforgettable.
            </p>
          </div>
          <div className={`blog-content ${readMore ? "read-more" : ""}`}>
            <div className="blog-text">
              <h2>Why You Should Care About Both</h2>
              <p>
                When done right, <span>photography and sound design</span>{" "}
                 together tell stories in a way no single medium can. Whether
                you’re creating Instagram reels, shooting a short film, or
                making a music video, one enhances the other. Always. That’s the
                core of what we teach in our multimedia production course , that
                sound isn't an afterthought. It’s a character of its own.
              </p>
              <h3>Our Course Offerings , Choose Your Creative Path</h3>
              <p>
                We don’t believe in cookie-cutter education. Whether you want a
                full-time career in media or are simply exploring creative
                hobbies, <u>SoundKraft</u> has you covered.
              </p>
              <h3>
                Academic Programs{" "}
                <span>(For Young Adults & Career-Seekers)</span>
              </h3>
              <div className="blog-list">
                <ul>
                  <li>Diploma: ₹5,00,000/year</li>
                  <li>Degree: ₹5,00,000/year</li>
                  <li>Post-Graduation: ₹6,00,000/year</li>
                </ul>
                <p>
                  These include hands-on training in photography, music
                  production, audio mixing, video editing, and even live event
                  coordination.
                </p>
              </div>
              <h3>
                Creative & Certification Courses{" "}
                <span>(For Working Professionals or Skill Upskillers)</span>
              </h3>
              <div className="blog-list">
                <ul>
                  <li>Photography (Basic to Advanced)</li>
                  <li>Music Production</li>
                  <li>Videography</li>
                  <li>DJing</li>
                  <li>Modelling & Portfolio Development</li>
                  <li>Video Editing</li>
                </ul>
                <p>
                  Combo Offers: 7-month bundles with free gear or discounts
                  <br />
                  Flexible Learning: Online, Offline, and Hybrid options
                </p>
              </div>
              <h3>
                GRMP & Hobby Courses <span>(For Kids, Teens, Explorers)</span>
              </h3>
              <div className="blog-list">
                <ul>
                  <li>
                    GRMP (Guaranteed Result Music Program) – ₹60,000 for 7
                    months
                  </li>
                  <li>
                    One-on-One Instrument/Vocal Classes – ₹70,000 for 7 months
                  </li>
                  <li>
                    Instrument-Specific Courses (e.g., Guitar ₹33,600, Violin
                    ₹38,500)
                  </li>
                  <li>Hobby Subscriptions – starting at ₹7,500/month</li>
                </ul>
              </div>
              <h3>Who’s This For</h3>
              <div className="blog-list">
                <p>Our doors are open to:</p>
                <ul>
                  <li>
                    Kids (6–16) starting hobbies or taking their first
                    music/photos
                  </li>
                  <li>
                    Young adults (17–25) building serious creative media careers
                  </li>
                  <li>
                    Professionals (25–40) pivoting into the creative space or
                    monetizing their passion
                  </li>
                </ul>
              </div>
              <p>
                From Bengaluru (Begur, HSR) to our new branches in Goa,
                Hyderabad, and Dubai, we’re bringing this training to creative
                minds all over.
              </p>
            </div>
            <div className="blog-text">
              <h2>What Makes SoundKraft Different</h2>
              <div className="blog-list">
                <ul>
                  <li>Trinity College London & RSL Certifications</li>
                  <li>
                    Real-world curriculum (DAW, DSLR, podcasting, film editing,
                    live sound)
                  </li>
                  <li>
                    Live showcases & public events for experience that actually
                    counts
                  </li>
                  <li>
                    Faculty who are industry pros who’ve walked the path, not
                    just read the manual
                  </li>
                  <li>International modules during degree programs</li>
                  <li>
                    Career guidance for jobs in studios, OTT, gaming, film,
                    events & more
                  </li>
                </ul>
              </div>
            </div>
            <div className="blog-text">
              <h2>Final Take</h2>
              <p>
                Choosing a path isn’t easy. But if you’ve ever felt the urge to
                create, to build something that moves people, then the combo of{" "}
                <span>photography and sound design</span> is a great place to
                start. Our multimedia production course isn’t just about
                learning tools And if a creative media career is what you’re
                aiming for, there’s no better launchpad than <u>SoundKraft</u>.
                <br /> Visit <span>www.soundkraft.in</span> to explore courses
                or call our counselors to find your fit.
              </p>
            </div>
            <div className="blog-read-more">
              <button onClick={handleReadMoreButton}>
                {!readMore ? "Read More" : "Read Less"}
              </button>
            </div>
          </div>
        </div>
        <div className="blog-right">
          <div className="blog-right-top">
            <div className="blog-right-top-set">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M12.6154 22.6532L12.6083 22.6494L12.5838 22.6361C12.5629 22.6248 12.533 22.6084 12.4947 22.587C12.4182 22.5443 12.308 22.4818 12.169 22.4C11.8912 22.2366 11.4976 21.9959 11.0268 21.6829C10.0866 21.0579 8.83048 20.1393 7.57098 18.9652C5.07846 16.6417 2.4375 13.1897 2.4375 8.9375C2.4375 5.76544 5.1064 3.25 8.32812 3.25C10.2227 3.25 11.9192 4.11568 13 5.47256C14.0808 4.11568 15.7773 3.25 17.6719 3.25C20.8936 3.25 23.5625 5.76544 23.5625 8.9375C23.5625 13.1897 20.9215 16.6417 18.429 18.9652C17.1695 20.1393 15.9134 21.0579 14.9732 21.6829C14.5024 21.9959 14.1088 22.2366 13.831 22.4C13.692 22.4818 13.5818 22.5443 13.5053 22.587C13.467 22.6084 13.4371 22.6248 13.4162 22.6361L13.3917 22.6494L13.3846 22.6532L13.3816 22.6548C13.1433 22.7813 12.8567 22.7813 12.6184 22.6548L12.6154 22.6532Z"
                  fill="#CC3102"
                />
              </svg>
              <p>2</p>
            </div>
            <div className="blog-right-top-set">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M23.4025 11.7298C23.6794 12.0782 23.8327 12.5308 23.8327 13C23.8327 13.4693 23.6794 13.9219 23.4025 14.2702C21.6492 16.4126 17.6582 20.5834 12.9994 20.5834C8.3405 20.5834 4.34957 16.4126 2.59623 14.2702C2.31931 13.9219 2.16602 13.4693 2.16602 13C2.16602 12.5308 2.31931 12.0782 2.59623 11.7298C4.34957 9.58753 8.3405 5.41669 12.9994 5.41669C17.6582 5.41669 21.6492 9.58753 23.4025 11.7298Z"
                  stroke="#888888"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.9999 16.3702C14.8444 16.3702 16.3396 14.8613 16.3396 12.9999C16.3396 11.1385 14.8444 9.62955 12.9999 9.62955C11.1554 9.62955 9.66022 11.1385 9.66022 12.9999C9.66022 14.8613 11.1554 16.3702 12.9999 16.3702Z"
                  stroke="#888888"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>4</p>
            </div>
            <div className="blog-right-top-set">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8752 15.125L4.51983 12.2362C3.64518 11.8386 3.6825 10.5837 4.57922 10.2388L20.4752 4.12502C21.3513 3.78805 22.2122 4.6489 21.8752 5.52504L15.7614 21.421C15.4165 22.3177 14.1616 22.355 13.764 21.4804L10.8752 15.125ZM10.8752 15.125L15.6253 10.375"
                  stroke="#888888"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>0</p>
            </div>
          </div>
          <div className="blog-right-bottom">
            <div className="blog-right-bottom-top">
              <div className="blog-right-bottom-top-set">
                <span>Publication Date</span>
                <p>September 01 , 2025</p>
              </div>
              <div className="blog-right-bottom-top-set">
                <span>Category</span>
                <p>Music</p>
              </div>
              <div className="blog-right-bottom-top-set">
                <span>Reading Time</span>
                <p>2 Min</p>
              </div>
              <div className="blog-right-bottom-top-set">
                <span>Author Name</span>
                <p>Soundkraft India</p>
              </div>
            </div>
            <div className="blog-right-bottom-bottom">
              <span>Table of Contents</span>
              <ul>
                <li>Introduction</li>
                <li>Why You Should Care About Both</li>
                <li>Our Course Offerings , Choose Your Creative path</li>
                <li>Academic Programs</li>
                <li>Creative & Certification Courses</li>
                <li>GRMP & Hobby Courses</li>
                <li>Who’s This For</li>
                <li>What Makes SoundKraft Different</li>
                <li>Final Take</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Posts />
    </>
  );
}

export default Blog1;
