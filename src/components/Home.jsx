import React from "react";
import Banner from "./Home/Banner";
import Courses from "./Home/Courses";
import Affiliations from "./Home/Affiliations";
import Deadline from "./Home/Deadline";
import Music from "./Courses/Music";
import Posts from "./Blogs/Posts";
import Testimony from "./Testimony";
import Challenges from "./Challenges";
import Footer from "./Footer";
import Partners from "./Home/Partners";
function Home() {
  return (
    <>
      <Banner />
      <Courses />
      <Affiliations />
      <Deadline />
      <Music />
      <Posts />
      <Partners />
      <Testimony />
    </>
  );
}

export default Home;
