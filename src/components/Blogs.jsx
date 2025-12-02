import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog1 from "./Blogs/Blog/Blog1";
import Banner from "./Blogs/Banner";
import Blog2 from "./Blogs/Blog/Blog2";

function Blogs() {
  return (
    <Routes>
      <Route index element={<Banner />} />
      <Route path="blog1" element={<Blog1 />} />
      <Route path="blog2" element={<Blog2 />} />
    </Routes>
  );
}

export default Blogs;
