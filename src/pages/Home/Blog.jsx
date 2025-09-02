import React, { useEffect, useState } from "react";
import blogsData from "../../blogData.js";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsData);
  }, []);

  if (blogs.length === 0) return null; // prevent crash on first render

  // const leftBlog = blogs[0]; // first blog
  // const rightBlogs = blogs.slice(-3); // last 4 blogs

  // Get the last 4 blogs
  const latestBlogs = blogs.slice(-4);
  const leftBlog = latestBlogs[0]; // first of last 4 blogs
  const rightBlogs = latestBlogs.slice(1); // remaining 3 blogs

  return (
    <section className="blog-two">
      <div className="container">
        <div className="row">
          {/* ===== Left Blog ===== */}
          <div className="col-xl-6">
            <div
              className="blog-two__left wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="section-title text-left sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">Our Blogs</span>
                  <div className="section-title__tagline-shape-2"></div>
                </div>
                <h2 className="section-title__title title-animation">
                  Explore Our Latest <span>Blogs for Expert Insights</span>
                </h2>
              </div>
              <p className="blog-two-text">
                Dive into our collection of blogs where we share expert
                insights, helpful tips, and the latest trends in the industry
              </p>
              <div className="blog-two__top-btn-box">
                <Link to="/blog-details" className="thm-btn">
                  View All Blogs<span className="icon-right-arrow"></span>
                </Link>
              </div>

              {/* Left Blog Content */}
              <div className="blog-two__left-content-box">
                <div className="blog-two__single">
                  <div className="blog-two__img">
                    <img
                      src={leftBlog.image}
                      alt={leftBlog.title}
                      style={{ width: "532px", height: "257px" }}
                    />
                    <div className="blog-two__tags">
                      {leftBlog.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="blog-two__content">
                    <div className="blog-two__user">
                      <div className="blog-two__user-img">
                        <img
                          src={leftBlog.user.image}
                          alt={leftBlog.user.name}
                        />
                      </div>
                      <p className="blog-two__user-title">
                        {leftBlog.user.name}
                      </p>
                    </div>
                    <ul className="blog-two__meta list-unstyled">
                      <li>
                        <Link to="/blog-details">
                          <span className="far fa-calendar-alt"></span>
                          {leftBlog.date}
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-details">
                          <span className="fal fa-comments"></span>
                          {leftBlog.comments} Comments
                        </Link>
                      </li>
                    </ul>
                    <h3 className="blog-two__title">
                      <Link to="/blog-details">{leftBlog.title}</Link>
                    </h3>
                    {leftBlog.description && (
                      <p className="blog-two__text">{leftBlog.description}</p>
                    )}
                    <div className="blog-two__btn-box">
                      <Link to="/blog-details" className="thm-btn">
                        Read More<span className="icon-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Right Blogs (last 4 only) ===== */}
          <div className="col-xl-6">
            <div className="blog-two__right">
              {rightBlogs.map((blog, index) => (
                <div
                  key={blog.id}
                  className={`blog-two__single-two wow ${
                    index % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                  }`}
                  data-wow-delay={`${(index + 1) * 100}ms`}
                >
                  <div className="blog-two__img-two">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      style={{ width: "250px", height: "260px" }}
                    />
                  </div>
                  <div className="blog-two__content-two">
                    <div className="blog-two__user-two">
                      <div className="blog-two__user-two-img">
                        <img src={blog.user.image} alt={blog.user.name} />
                      </div>
                      <p className="blog-two__user-two-title">
                        {blog.user.name}
                      </p>
                    </div>
                    <div className="blog-two__tags-two">
                      {blog.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                    <h3 className="blog-two__title-two">
                      <Link to="/blog-details">{blog.title}</Link>
                    </h3>
                    <ul className="blog-two__meta-two list-unstyled">
                      <li>
                        <Link to="/blog-details">
                          <span className="far fa-calendar-alt"></span>
                          {blog.date}
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-details">
                          <span className="fal fa-comments"></span>
                          {blog.comments} Comments
                        </Link>
                      </li>
                    </ul>
                    <div className="blog-two__btn-box-two">
                      <Link to="/blog-details" className="thm-btn">
                        Read More<span className="icon-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
