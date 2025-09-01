// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import blogsData from "../../blogData.js";

// const BlogInfo = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     setBlogs(blogsData);
//   }, []);

//   return (
//     <section className="blog-page">
//       <div className="blog-page__shape-1"></div>
//       <div className="blog-page__shape-2"></div>
//       <div className="container">
//         <div className="section-title text-center sec-title-animation animation-style1">
//           <div className="section-title__tagline-box">
//             <div className="section-title__tagline-shape-1"></div>
//             <span className="section-title__tagline">News & Blog</span>
//             <div className="section-title__tagline-shape-2"></div>
//           </div>
//           <h2 className="section-title__title title-animation">
//             How We've <span>Empowered Businesses</span>
//             <br />
//             <span>with Innovative</span>Tech Solutions
//           </h2>
//         </div>
//         <div className="row">
//           <div
//             className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
//             data-wow-delay="100ms"
//           >
//             <div className="blog-one__single">
//               <div className="blog-one__img">
//                 <img src="assets/images/blog/blog-page-1-1.jpg" alt="" />
//                 <div className="blog-one__tags">
//                   <span>Digital</span>
//                   <span>Technology</span>
//                 </div>
//               </div>
//               <div className="blog-one__content">
//                 <div className="blog-one__user">
//                   <div className="blog-one__user-img">
//                     <img src="assets/images/blog/blog-page-user-1.jpg" alt="" />
//                   </div>
//                   <p className="blog-one__user-title">Alisa Olivia</p>
//                 </div>
//                 <ul className="blog-one__meta list-unstyled">
//                   <li>
//                     <Link to="/blog-details">
//                       <span className="far fa-calendar-alt"></span>April 5, 2025
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/blog-details">
//                       <span className="fal fa-comments"></span>80 Comments
//                     </Link>
//                   </li>
//                 </ul>
//                 <h3 className="blog-one__title">
//                   <Link to="/blog-details">
//                     Top IT Trends Shaping the Future of Business in 2025
//                   </Link>
//                 </h3>
//                 <p className="blog-one__text">
//                   Explore essential cybersecurity strategies to safeguard
//                   sensitive information and defend against evolving cyber
//                   threats.
//                 </p>
//                 <div className="blog-one__btn-box">
//                   <Link to="/blog-details" className="thm-btn">
//                     Reed More<span className="icon-right-arrow"></span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
//             data-wow-delay="200ms"
//           >
//             <div className="blog-one__single">
//               <div className="blog-one__img">
//                 <img src="assets/images/blog/blog-page-1-2.jpg" alt="" />
//                 <div className="blog-one__tags">
//                   <span>Digital</span>
//                   <span>Technology</span>
//                 </div>
//               </div>
//               <div className="blog-one__content">
//                 <div className="blog-one__user">
//                   <div className="blog-one__user-img">
//                     <img src="assets/images/blog/blog-page-user-2.jpg" alt="" />
//                   </div>
//                   <p className="blog-one__user-title">Alisa Olivia</p>
//                 </div>
//                 <ul className="blog-one__meta list-unstyled">
//                   <li>
//                     <Link to="/blog-details">
//                       <span className="far fa-calendar-alt"></span>April 5, 2025
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/blog-details">
//                       <span className="fal fa-comments"></span>80 Comments
//                     </Link>
//                   </li>
//                 </ul>
//                 <h3 className="blog-one__title">
//                   <Link to="/blog-details">
//                     Cybersecurity Best Practices Protecting Your Data
//                   </Link>
//                 </h3>
//                 <p className="blog-one__text">
//                   Explore essential cybersecurity strategies to safeguard
//                   sensitive information and defend against evolving cyber
//                   threats.
//                 </p>
//                 <div className="blog-one__btn-box">
//                   <Link to="/blog-details" className="thm-btn">
//                     Reed More<span className="icon-right-arrow"></span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
//             data-wow-delay="300ms"
//           >
//             <div className="blog-one__single">
//               <div className="blog-one__img">
//                 <img src="assets/images/blog/blog-page-1-3.jpg" alt="" />
//                 <div className="blog-one__tags">
//                   <span>Digital</span>
//                   <span>Technology</span>
//                 </div>
//               </div>
//               <div className="blog-one__content">
//                 <div className="blog-one__user">
//                   <div className="blog-one__user-img">
//                     <img src="assets/images/blog/blog-page-user-3.jpg" alt="" />
//                   </div>
//                   <p className="blog-one__user-title">Thomas Alison</p>
//                 </div>
//                 <ul className="blog-one__meta list-unstyled">
//                   <li>
//                     <Link to="/blog-details">
//                       <span className="far fa-calendar-alt"></span>March 15,
//                       2025
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/blog-details">
//                       <span className="fal fa-comments"></span>88 Comments
//                     </Link>
//                   </li>
//                 </ul>
//                 <h3 className="blog-one__title">
//                   <Link to="/blog-details">
//                     Cloud Computing vs. On-Premise Solutions Which is Right for
//                     You?
//                   </Link>
//                 </h3>
//                 <p className="blog-one__text">
//                   Explore essential cybersecurity strategies to safeguard
//                   sensitive information and defend against evolving cyber
//                   threats.
//                 </p>
//                 <div className="blog-one__btn-box">
//                   <Link to="/blog-details" className="thm-btn">
//                     Reed More<span className="icon-right-arrow"></span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
//             data-wow-delay="700ms"
//           >
//             <div className="blog-one__single">
//               <div className="blog-one__img">
//                 <img src="assets/images/blog/blog-page-1-7.jpg" alt="" />
//                 <div className="blog-one__tags">
//                   <span>Digital</span>
//                   <span>Technology</span>
//                 </div>
//               </div>
//               <div className="blog-one__content">
//                 <div className="blog-one__user">
//                   <div className="blog-one__user-img">
//                     <img src="assets/images/blog/blog-page-user-7.jpg" alt="" />
//                   </div>
//                   <p className="blog-one__user-title">David Johnson</p>
//                 </div>
//                 <ul className="blog-one__meta list-unstyled">
//                   <li>
//                     <Link to="/blog-details">
//                       <span className="far fa-calendar-alt"></span>March 5, 2025
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/blog-details">
//                       <span className="fal fa-comments"></span>45 Comments
//                     </Link>
//                   </li>
//                 </ul>
//                 <h3 className="blog-one__title">
//                   <Link to="/blog-details">
//                     Why Cybersecurity Should Be Your Top Priority in 2025
//                   </Link>
//                 </h3>
//                 <p className="blog-one__text">
//                   Learn how to protect your business from cyber threats with the
//                   latest security solutions, best practices..
//                 </p>
//                 <div className="blog-one__btn-box">
//                   <Link to="/blog-details" className="thm-btn">
//                     Reed More<span className="icon-right-arrow"></span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
//             data-wow-delay="800ms"
//           >
//             <div className="blog-one__single">
//               <div className="blog-one__img">
//                 <img src="assets/images/blog/blog-page-1-8.jpg" alt="" />
//                 <div className="blog-one__tags">
//                   <span>Digital</span>
//                   <span>Technology</span>
//                 </div>
//               </div>
//               <div className="blog-one__content">
//                 <div className="blog-one__user">
//                   <div className="blog-one__user-img">
//                     <img src="assets/images/blog/blog-page-user-8.jpg" alt="" />
//                   </div>
//                   <p className="blog-one__user-title">Jessica Martinez</p>
//                 </div>
//                 <ul className="blog-one__meta list-unstyled">
//                   <li>
//                     <Link to="/blog-details">
//                       <span className="far fa-calendar-alt"></span>April 1, 2025
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/blog-details">
//                       <span className="fal fa-comments"></span>45 Comments
//                     </Link>
//                   </li>
//                 </ul>
//                 <h3 className="blog-one__title">
//                   <Link to="/blog-details">
//                     Cloud vs. On-Premise: Which IT Infrastructure Is Right for
//                     You?
//                   </Link>
//                 </h3>
//                 <p className="blog-one__text">
//                   A detailed comparison of cloud and on-premise solutions to
//                   help businesses choose the best IT infrastructure.
//                 </p>
//                 <div className="blog-one__btn-box">
//                   <Link to="/blog-details" className="thm-btn">
//                     Reed More<span className="icon-right-arrow"></span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
//             data-wow-delay="900ms"
//           >
//             <div className="blog-one__single">
//               <div className="blog-one__img">
//                 <img src="assets/images/blog/blog-page-1-9.jpg" alt="" />
//                 <div className="blog-one__tags">
//                   <span>Digital</span>
//                   <span>Technology</span>
//                 </div>
//               </div>
//               <div className="blog-one__content">
//                 <div className="blog-one__user">
//                   <div className="blog-one__user-img">
//                     <img src="assets/images/blog/blog-page-user-9.jpg" alt="" />
//                   </div>
//                   <p className="blog-one__user-title">David Johnson</p>
//                 </div>
//                 <ul className="blog-one__meta list-unstyled">
//                   <li>
//                     <Link to="/blog-details">
//                       <span className="far fa-calendar-alt"></span>February 15,
//                       2025
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/blog-details">
//                       <span className="fal fa-comments"></span>45 Comments
//                     </Link>
//                   </li>
//                 </ul>
//                 <h3 className="blog-one__title">
//                   <Link to="/blog-details">
//                     How Managed IT Services Can Reduce Costs
//                   </Link>
//                 </h3>
//                 <p className="blog-one__text">
//                   Find out how outsourcing IT services can help businesses cut
//                   costs, improve efficiency, and focus on core.
//                 </p>
//                 <div className="blog-one__btn-box">
//                   <Link to="/blog-details" className="thm-btn">
//                     Reed More<span className="icon-right-arrow"></span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <!-- Blog One Single Start --> */}
//           <div className="blog-page__pagination">
//             <ul className="pg-pagination list-unstyled">
//               <li className="prev">
//                 <Link to="#" aria-label="prev">
//                   <span className="icon-left-arrow-1"></span>
//                 </Link>
//               </li>
//               <li className="count active">
//                 <Link to="#">01</Link>
//               </li>
//               <li className="count">
//                 <Link to="#">02</Link>
//               </li>
//               <li className="count">
//                 <Link to="#">...</Link>
//               </li>
//               <li className="count">
//                 <Link to="#">10</Link>
//               </li>
//               <li className="next">
//                 <Link to="#" aria-label="Next">
//                   <span className="icon-left-arrow-1"></span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogInfo;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogsData from "../../blogData.js";

const BlogInfo = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsData);
  }, []);

  return (
    <section className="blog-page">
      <div className="blog-page__shape-1"></div>
      <div className="blog-page__shape-2"></div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-1"></div>
            <span className="section-title__tagline">News & Blog</span>
            <div className="section-title__tagline-shape-2"></div>
          </div>
          <h2 className="section-title__title title-animation">
            How We've <span>Empowered Businesses</span>
            <br />
            <span>with Innovative</span>Tech Solutions
          </h2>
        </div>

        <div className="row">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${100 + index * 100}ms`}
            >
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img src={blog.image} alt={blog.title} />
                  <div className="blog-one__tags">
                    {blog.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="blog-one__content">
                  <div className="blog-one__user">
                    <div className="blog-one__user-img">
                      <img src={blog.user.image} alt={blog.user.name} />
                    </div>
                    <p className="blog-one__user-title">{blog.user.name}</p>
                  </div>

                  <ul className="blog-one__meta list-unstyled">
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

                  <h3 className="blog-one__title">
                    <Link to="/blog-details">{blog.title}</Link>
                  </h3>

                  <p className="blog-one__text">{blog.description}</p>

                  <div className="blog-one__btn-box">
                    <Link to="/blog-details" className="thm-btn">
                      Read More<span className="icon-right-arrow"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="blog-page__pagination">
            <ul className="pg-pagination list-unstyled">
              <li className="prev">
                <Link to="#" aria-label="prev">
                  <span className="icon-left-arrow-1"></span>
                </Link>
              </li>
              <li className="count active">
                <Link to="#">01</Link>
              </li>
              <li className="count">
                <Link to="#">02</Link>
              </li>
              <li className="count">
                <Link to="#">...</Link>
              </li>
              <li className="count">
                <Link to="#">10</Link>
              </li>
              <li className="next">
                <Link to="#" aria-label="Next">
                  <span className="icon-left-arrow-1"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogInfo;
