import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Navbar/Logo.png";
import Primary from "./Buttons/Primary";

function Navbar() {
  return (
    <header>
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={Logo} alt="SIMMFA Logo" />
          </Link>
          <Link to="courses">Courses</Link>
          <Link to="about">About us</Link>
          <Link to="blogs">Blogs</Link>
        </div>
        <Primary text="Contact us" toLink="contact" />
      </div>
    </header>
  );
}

export default Navbar;
