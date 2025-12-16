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
import Journey from "./Home/Journey";
import Empire from "./Home/Empire";
function Home() {
  return (
    <>
      <Banner />
      <Courses />
      <Affiliations />
      <Deadline />
      <Empire />     
      <Music />
      <Posts />
      <Journey />
      <Partners />
      <Testimony />
    </>
  );
}

export default Home;
