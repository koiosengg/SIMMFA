import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Navbar/Logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <img src={Logo} alt="SIMMFA Logo" className="logo" />
        <div className="footer">
          <nav>
            <Link to="/">Home</Link>
            <Link to="about">About us</Link>
            <Link to="courses">Courses</Link>
            <Link to="blogs">Blogs</Link>
            <Link to="contact" className="desktop">
              Contact us
            </Link>
          </nav>
          <nav>
            <Link to="contact" className="mobile">
              Contact us
            </Link>
            <a href="#" target="_blank">
              Linkedin
            </a>
            <a href="#" target="_blank">
              Instagram
            </a>
            <a href="#" target="_blank">
              Facebook
            </a>
          </nav>
          <div className="footer-right">
            <p>© 2025 SIMMFA . All Rights Reserved </p>
            <p>
              Crafted by{" "}
              <a href="https://www.koiostudio.com/" target="_blank">
                Koiostudio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
