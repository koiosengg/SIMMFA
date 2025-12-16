import React from "react";
import Img1 from "../../assets/Home/Journey/Img1.jpg";
import Img2 from "../../assets/Home/Journey/Img2.jpg";
import Img3 from "../../assets/Home/Journey/Img3.jpg";

function Journey() {
  return (
    <section className="home-journey">
      <div className="home-courses-heading">
        <h2>
          Experience the
          <br className="desktop" /> Soundkraft Journey
        </h2>
        <p>
          Through moments that inspire music, we discover the rhythm of life —
          where emotions turn into melodies, and every heartbeat becomes a song.
        </p>
      </div>
      <div className="home-journey-container">
        <div className="home-journey-set">
          <div className="home-journey-set-img">
            <img src={Img1} alt="Student Achievements" />
          </div>
          <p>
            Student
            <br className="desktop" /> Achievements
          </p>
        </div>
        <div className="home-journey-set">
          <div className="home-journey-set-img">
            <img src={Img2} alt="Live Performances & Concerts" />
          </div>
          <p>
            Live Performances &
            <br className="desktop" /> Concerts
          </p>
        </div>
        <div className="home-journey-set">
          <div className="home-journey-set-img">
            <img src={Img3} alt="Studio & Classroom Sessions" />
          </div>
          <p>
            Studio &
            <br className="desktop" /> Classroom Sessions
          </p>
        </div>
      </div>
    </section>
  );
}

export default Journey;
