import React, { useState } from "react";
import DesktopBanner from "../../../assets/Blogs/Blog/Blog2/Desktop Banner.png";
import Posts from "../Posts";

function Blog2() {
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
          Top 5 Mistakes Aspiring Sound Engineers
          <br className="desktop" />
          Make And How to Avoid Them
        </h1>
      </section>
      <section className="blog-container">
        <div className="blog-left">
          <div className="blog-introduction">
            <h2>Introduction</h2>
            <p>
              You mess up, you learn, you try again. That’s how it goes. But if
              you’re just getting into this world, there are a few common traps
              most people fall into early. And you don’t need to succumb to each
              one of them.
              <br /> So yeah, here’s a quick list , honest, from experience , of
              the top 5 things that trip up every beginner sound engineer at
              some point, and what you can do to stay clear.
            </p>
          </div>
          <div className={`blog-content ${readMore ? "read-more" : ""}`}>
            <div className="blog-text">
              <h2>Thinking You Need Fancy Gear on Day One</h2>
              <p>
                This one's a classic. You scroll Instagram or YouTube, and
                suddenly you're convinced you need a $1,200 mic, a massive
                interface, and a rack full of preamps just to make decent sound.
                But honestly? That’s just not true. You can get really far with
                basic equipment , if you understand how to actually use it.
              </p>
              <p>
                Sound engineering tip: Don’t let gear become a distraction. Work
                with what you’ve got. Learn the basics. The rest will come with
                time.
              </p>
            </div>
            <div className="blog-text">
              <h2>Mixing with Your Eyes Instead of Your Ears</h2>
              <p>
                Ever watched the meters and said, “Looks good!” even though
                something sounded off? Yeah, we’ve all done it. But trust me ,
                sound is not a visual sport.
              </p>
              <p>
                Audio production advice: Your ears are the real tool. Not the
                screen. Listen more. Look less. You’ll mix better, faster.
              </p>
            </div>
            <div className="blog-text">
              <h2>Forgetting the Room Matters</h2>
              <p>
                This one’s sneaky. You spend on gear but don’t touch the room.
                If your space is full of echoes or weird resonances, your mix
                will always be off , no matter how good your headphones or
                monitors are.
              </p>
              <p>
                Tip: Treat your space however you can. Rugs, curtains, foam.
                Doesn’t have to be fancy. Simply… notice the environment around
                you.
              </p>
            </div>
            <div className="blog-text">
              <h2>Ignoring the “Boring” Stuff</h2>
              <p>
                Gain staging. Labeling tracks. Backing up your sessions. These
                don’t sound exciting, but if you skip them, they’ll bite you
                later.
              </p>
              <p>
                Sound engineering tip: Develop good habits early. Save yourself
                the panic when your DAW crashes or someone else opens your messy
                session.
              </p>
            </div>
            <div className="blog-text">
              <h2>Not Actually Listening to Enough Music</h2>
              <p>
                Seriously. Some new engineers barely listen to music outside
                their projects. Big mistake. If you’re serious about this, pay
                attention to this advice. Break down mixes. Pick out where the
                kick sits. Notice how the vocals breathe. Your ears will thank
                you.
              </p>
            </div>
            <div className="blog-text">
              <h2>Wrapping Up </h2>
              <p>
                At SoundKraft, we’ve seen these mistakes play out over and over
                again. And we’ve also seen people bounce back from them
                stronger. Mistakes aren’t the problem , staying stuck in them
                is. The gear, the skills, the plugins , all that comes with
                time. But your mindset? That’s something you can fix today.
                Visit SoundKraft to learn more.
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
                <p>August 27 , 2025</p>
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
                <li>Thinking You Need Fancy Gear on Day One</li>
                <li>Mixing with Your Eyes Instead of Your Ears</li>
                <li> Forgetting the Room Matters</li>
                <li>Ignoring the “Boring” Stuff</li>
                <li>Not Actually Listening to Enough Music</li>
                <li>Wrapping Up </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Posts />
    </>
  );
}

export default Blog2;
