import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Courses/Banner";
import Offered from "./Courses/Offered";
import Music from "./Courses/Music";
import FAQ from "./FAQ";
import Testimony from "./Testimony";
import HobbySubscriptions from "./Courses/Course/HobbySubscriptions";
import AdvanceMusicCertification from "./Courses/Course/AdvanceMusicCertification";
import AcademicPrograms from "./Courses/Course/AcademicPrograms";
import GRMP from "./Courses/Course/GRMP";
import CertificationCourses from "./Courses/Course/CertificationCourses";

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
      <Route path="Academic-Programs" element={<AcademicPrograms />} />
      <Route path="Guaranteed-Result-Music-Program" element={<GRMP />} />
      <Route path="Certification-Courses" element={<CertificationCourses />} />
      <Route
        path="Advance-Music-Certification"
        element={<AdvanceMusicCertification />}
      />
    </Routes>
  );
}

export default Courses;
