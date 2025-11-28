import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Application from "./components/Application";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Challenges from "./components/Challenges";
import Blogs from "./components/Blogs";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="blogs/*" element={<Blogs />} />
          <Route path="application/*" element={<Application />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Challenges />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
