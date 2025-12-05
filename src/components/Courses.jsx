import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Courses/Banner";
import Offered from "./Courses/Offered";
import Music from "./Courses/Music";
import FAQ from "./FAQ";

function Courses() {
  return (
    <Routes>
      <Route
        index
        element={
          <>
            <Banner />
            <Offered />
            <Music />
            <FAQ />
          </>
        }
      />
      {/* <Route path="blog1" element={<Blog1 />} /> */}
    </Routes>
  );
}

export default Courses;
