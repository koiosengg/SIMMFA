import React from "react";
import Sample from "../../assets/Courses/Video/Audio Video.mp4";

function Video() {
  return (
    <section className="course-video">
      <div className="course-video-heading">
        <h2>SIMMFA</h2>
        <p>
          See how we turn passion into skill through immersive lessons and
          unforgettable performances.
        </p>
      </div>
      <video src={Sample} autoPlay controls />
    </section>
  );
}

export default Video;
