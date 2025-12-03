import React, { useState } from "react";
import DesktopBanner from "../../../assets/Blogs/Blog/Blog6/Desktop Banner.png";
import Posts from "../Posts";

function Blog6() {
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
          Soundkraft Culture:
          <br className="desktop" />
          Learning, Performing, Evolving
        </h1>
      </section>
      <section className="blog-container">
        <div className="blog-left">
          <div className="blog-introduction">
            <h2>Introduction</h2>
            <p>
              At Soundkraft, sound isn’t just something you hear it’s something
              you live. From the moment a student walks through our doors, they
              become part of a community that celebrates passion, creativity,
              and progress in audio.
            </p>
            <p>
              Our culture is built on more than lessons; it’s shaped by
              experience, collaboration, and a genuine love for sound.
            </p>
          </div>
          <div className={`blog-content ${readMore ? "read-more" : ""}`}>
            <div className="blog-text">
              <h2>Learning That Goes Beyond the Classroom</h2>
              <p>
                Soundkraft offers a hands-on environment where learning is
                rooted in real-world application. Whether it's mixing live sound
                for an event, exploring audio post-production, or working on
                professional recording setups, our learners are constantly
                applying what they know. With experienced mentors guiding them,
                they don't just study theory they live it.
              </p>
              <p>
                Our programs include sessions where students handle gear,
                troubleshoot technical issues, and produce sound in a
                studio-grade setup. They learn to be flexible, sharp, and
                responsive traits every audio professional needs.
              </p>
            </div>
            <div className="blog-text">
              <h2>Performing: The Real Test of Skill</h2>
              <p>
                We{" "}
                <a href="https://www.soundkraft.in/" target="_blank">
                  believe performance
                </a>{" "}
                is the heartbeat of audio training. That’s why Soundkraft gives
                its students opportunities to work at live shows, manage
                technical setups, and interact with actual event crews. These
                experiences prepare them to handle high-pressure environments
                with skill and confidence.
              </p>
              <p>
                Every stage, every mic check, and every live mix becomes a
                classroom. These real-time applications of their training
                reinforce their skills and introduce them to the fast-paced
                dynamics of audio work.
              </p>
              <p>
                Our students often take part in music concerts, college
                festivals, and corporate events managing sound boards, lighting,
                and stage coordination. The result? A professional portfolio
                even before graduation.
              </p>
            </div>
            <div className="blog-text">
              <h2>Evolving with the Industry</h2>
              <p>
                The audio world is fast-paced and ever-changing, and so are we.
                Soundkraft is committed to staying ahead of trends, adopting new
                technologies, and ensuring our students are future-ready. Our
                curriculum evolves with the industry, incorporating digital
                audio workstations (DAWs), immersive audio formats, and hybrid
                production tools.
              </p>
              <p>
                Our culture encourages experimentation, innovation, and
                continuous learning. Whether it’s a new plugin or a
                revolutionary mixing technique, we make sure our students are
                ready to adapt and excel.
              </p>
              <p>
                The emphasis on growth doesn’t stop at the technical. We also
                help students develop soft skills like team communication, time
                management, and creative problem-solving.
              </p>
            </div>
            <div className="blog-text">
              <h2>More Than a School—A Sound Community</h2>
              <p>
                At its core,{" "}
                <a href="https://www.soundkraft.in/" target="_blank">
                  Soundkraft is a hub
                </a>{" "}
                for aspiring sound professionals in Bangalore. Our alumni,
                faculty, and students form a tight-knit network of support and
                inspiration. Events, jam sessions, guest lectures, and
                collaborations are all part of the experience.
              </p>
              <p>
                These activities allow students to connect, share their work,
                and build lasting professional relationships.
              </p>
              <p>
                We believe in creating an ecosystem that continues to support
                students beyond their classroom days. Many of our alumni return
                as mentors, collaborators, or project leads, helping current
                students chart their own audio journey. This culture of giving
                back and staying connected is what makes Soundkraft unique.
              </p>
            </div>
            <div className="blog-text">
              <h2>Final Notes</h2>
              <p>
                <a href="https://www.soundkraft.in/" target="_blank">
                  Soundkraft isn’t
                </a>{" "}
                just about learning audio it’s about becoming part of something
                bigger. It’s about finding your sound, honing it, and sharing it
                with the world. Here, students are encouraged to take ownership
                of their craft and build a future they’re proud of.
              </p>
              <p>
                From beginner-level enthusiasts to advanced professionals, every
                learner at Soundkraft is treated with equal respect and given
                equal opportunity to grow.
                <br />
                The result? Confident, skilled, and creative sound professionals
                who aren’t afraid to make noise in all the right ways.
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
                <p>July 25 , 2025</p>
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
                <li>Learning That Goes Beyond the Classroom</li>
                <li>Performing: The Real Test of Skill</li>
                <li>Evolving with the Industry</li>
                <li>More Than a School—A Sound Community</li>
                <li>Final Notes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Posts />
    </>
  );
}

export default Blog6;
