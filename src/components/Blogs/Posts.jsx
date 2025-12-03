import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Blog1 from "../../assets/Blogs/Posts/Blog1.png";
import Blog2 from "../../assets/Blogs/Posts/Blog2.jpg";
import Blog3 from "../../assets/Blogs/Posts/Blog3.png";
import Blog4 from "../../assets/Blogs/Posts/Blog4.jpg";
import Blog5 from "../../assets/Blogs/Posts/Blog5.jpg";
import Blog6 from "../../assets/Blogs/Posts/Blog6.png";
import Blog7 from "../../assets/Blogs/Posts/Blog7.png";
import Blog8 from "../../assets/Blogs/Posts/Blog8.png";

function Posts() {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const blogPosts = [
    {
      img: Blog1,
      title: "How Photography and Audio Work Together in Multimedia",
      category: "Music",
      likes: 2,
      shares: 0,
      link: "/blogs/blog1",
    },
    {
      img: Blog2,
      title:
        "Top 5 Mistakes Aspiring Sound Engineers Make And How to Avoid Them",
      category: "Music",
      likes: 5,
      shares: 1,
      link: "/blogs/blog2",
    },
    {
      img: Blog3,
      title: "How AI Is Changing the Future of Music Production",
      category: "Music",
      likes: 3,
      shares: 2,
      link: "/blogs/blog3",
    },
    {
      img: Blog4,
      title: "Practical Skills You’ll Gain When You Learn Live Sound",
      category: "Music",
      likes: 3,
      shares: 2,
      link: "/blogs/blog4",
    },
    {
      img: Blog5,
      title: "How an Audio Production Diploma Can Boost Your Music Career",
      category: "Music",
      likes: 3,
      shares: 2,
      link: "/blogs/blog5",
    },
    {
      img: Blog6,
      title: "Soundkraft Culture: Learning, Performing, Evolving",
      category: "Music",
      likes: 3,
      shares: 2,
      link: "/blogs/blog6",
    },
    {
      img: Blog7,
      title: "Hands-On Music Training at Soundkraft Real Gear, Real Learning",
      category: "Music",
      likes: 3,
      shares: 2,
      link: "/blogs/blog7",
    },
    {
      img: Blog8,
      title: "Is a Diploma in Sound Engineering Worth It in 2025?",
      category: "Music",
      likes: 3,
      shares: 2,
      link: "/blogs/blog8",
    },
  ];

  const maxIndex = blogPosts.length - 3;

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    setSlideWidth(width / 3 - 16 + 24);
  }, []);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * slideWidth
      }px)`;
      sliderRef.current.style.transition = "0.4s ease";
    }
  }, [currentIndex, slideWidth]);

  return (
    <section className="blogs-posts">
      <div className="blogs-posts-heading">
        <h2>Our Recent Posts</h2>
        <div className="blogs-posts-buttons">
          <div
            className={`blogs-posts-button ${
              currentIndex === 0 ? "disabled" : ""
            }`}
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.57031 5.92993L3.50031 11.9999L9.57031 18.0699"
                stroke="#F8F8F8"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5 12H3.67"
                stroke="#F8F8F8"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className={`blogs-posts-button ${
              currentIndex === maxIndex ? "disabled" : ""
            }`}
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699"
                stroke="#F8F8F8"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 12H20.33"
                stroke="#F8F8F8"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="blogs-posts-container" ref={containerRef}>
        <div className="blogs-posts-slider" ref={sliderRef}>
          {blogPosts.map((post, index) => (
            <div className="blogs-posts-card" key={index}>
              <img src={post.img} alt={post.title} />
              <div className="blogs-posts-card-content">
                <div className="blogs-posts-card-text">
                  <h3>{post.title}</h3>
                  <p>{post.category}</p>
                </div>
                <div className="blogs-posts-card-bottom">
                  <div className="blogs-posts-card-icons">
                    <div className="blogs-posts-card-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                      >
                        <path
                          d="M7.83333 2.08672C8.3756 1.45703 9.31375 0.75 10.7422 0.75C13.2403 0.75 14.9167 3.07813 14.9167 5.24609C14.9167 9.77813 9.23269 13.25 7.83333 13.25C6.43398 13.25 0.75 9.77813 0.75 5.24609C0.75 3.07813 2.42639 0.75 4.92444 0.75C6.35292 0.75 7.29107 1.45703 7.83333 2.08672Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>{post.likes}</p>
                    </div>
                    <div className="blogs-posts-card-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6.12727 9.27089L1.23852 7.04873C0.565712 6.74291 0.594417 5.77761 1.2842 5.51231L13.5119 0.809362C14.1858 0.550149 14.848 1.21235 14.5888 1.8863L9.88585 14.114C9.62055 14.8037 8.65525 14.8324 8.34943 14.1596L6.12727 9.27089ZM6.12727 9.27089L9.78122 5.61706"
                          stroke="#686868"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>{post.shares}</p>
                    </div>
                  </div>
                  <Link to={post.link}>Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Posts;
