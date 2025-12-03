import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Blogs/Banner";
import Blog1 from "./Blogs/Blog/Blog1";
import Blog2 from "./Blogs/Blog/Blog2";
import Blog3 from "./Blogs/Blog/Blog3";
import Blog4 from "./Blogs/Blog/Blog4";
import Blog5 from "./Blogs/Blog/Blog5";
import Blog6 from "./Blogs/Blog/Blog6";
import Blog7 from "./Blogs/Blog/Blog7";
import Blog8 from "./Blogs/Blog/Blog8";

function Blogs() {
  return (
    <Routes>
      <Route index element={<Banner />} />
      <Route path="blog1" element={<Blog1 />} />
      <Route path="blog2" element={<Blog2 />} />
      <Route path="blog3" element={<Blog3 />} />
      <Route path="blog4" element={<Blog4 />} />
      <Route path="blog5" element={<Blog5 />} />
      <Route path="blog6" element={<Blog6 />} />
      <Route path="blog7" element={<Blog7 />} />
      <Route path="blog8" element={<Blog8 />} />
    </Routes>
  );
}

export default Blogs;
