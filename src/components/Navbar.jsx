import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Navbar/Logo.png";
import Menu from "/menu.svg";
import MenuCancel from "/menu cancel.svg";
import Primary from "./Buttons/Primary";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  return (
    <header>
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={Logo} alt="SIMMFA Logo" />
          </Link>
          <Link to="courses" className="desktop">
            Courses
          </Link>
          <Link to="about" className="desktop">
            About us
          </Link>
          <Link to="blogs" className="desktop">
            Blogs
          </Link>
        </div>
        <Primary text="Contact us" toLink="contact" className="desktop" />
        <div className="mobile-navbar-button mobile" onClick={toggleMobileNav}>
          <img
            src={Menu}
            alt="Mobile navbar open"
            style={{
              display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
            }}
          />
          <img
            src={MenuCancel}
            alt="Mobile navbar close"
            style={{
              display: isMobileNavOpen ? "block" : hasToggled ? "none" : "none",
            }}
          />
        </div>
        <div
          className={`mobileNavbar mobile ${
            isMobileNavOpen
              ? "activeMobileNavbar"
              : hasToggled
              ? "nonactiveMobileNavbar"
              : ""
          }`}
        >
          <nav>
            <div className="mobile-nav-links">
              <Link to="/courses" onClick={handleLinkClick}>
                Courses
              </Link>
              <Link to="/about" onClick={handleLinkClick}>
                About us
              </Link>
              <Link to="/blogs" onClick={handleLinkClick}>
                Blogs
              </Link>
            </div>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="primary-button"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
