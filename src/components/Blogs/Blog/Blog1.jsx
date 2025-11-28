import React from "react";
import DesktopBanner from "../../../assets/Blogs/Blog/Blog1/Desktop Banner.png";

function Blog1() {
  return (
    <>
      <div className="blog-banner">
        <img src={DesktopBanner} alt="Desktop Banner" />
        <h1>
          How Photography and Audio Work <br className="desktop" />
          Together in Multimedia
        </h1>
      </div>
    </>
  );
}

export default Blog1;
