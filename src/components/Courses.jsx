import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Courses/Banner";
import Offered from "./Courses/Offered";
import Music from "./Courses/Music";
import FAQ from "./FAQ";
import Testimony from "./Testimony";
import HobbySubscriptions from "./Courses/Course/HobbySubscriptions";

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
            <Testimony />
          </>
        }
      />
      <Route path="Hobby-Subscriptions" element={<HobbySubscriptions />} />
    </Routes>
  );
}

export default Courses;
