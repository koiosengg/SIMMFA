import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./BlogData";

function Trending() {
  return (
    <section className="blogs-trending">
      <div className="blogs-trending-heading">
        <h2>
          What’s Trending <br className="desktop" />
          in our world
        </h2>
        <p>
          Your backstage pass to the latest stories, ideas, and inspirations
          from the world of music.
        </p>
      </div>
      <div className="blogs-trending-container">
        {blogPosts.map((post, index) => (
          <Link to={post.link} className="blogs-posts-card" key={index}>
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
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Trending;
