import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog1 from "./Blogs/Blog/Blog1";
import Banner from "./Blogs/Banner";
import Blog2 from "./Blogs/Blog/Blog2";
import Blog3 from "./Blogs/Blog/Blog3";
import Blog4 from "./Blogs/Blog/Blog4";
import Blog5 from "./Blogs/Blog/Blog5";

function Blogs() {
  return (
    <Routes>
      <Route index element={<Banner />} />
      <Route path="blog1" element={<Blog1 />} />
      <Route path="blog2" element={<Blog2 />} />
      <Route path="blog3" element={<Blog3 />} />
      <Route path="blog4" element={<Blog4 />} />
      <Route path="blog5" element={<Blog5 />} />
    </Routes>
  );
}

export default Blogs;
