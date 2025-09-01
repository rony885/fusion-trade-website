import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-two">
      <div className="about-two__shape-2"></div>
      <div className="about-two__shape-3">
        <img src="/assets/images/shapes/about-two-shape-3.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-two__left">
              <div className="about-two__img-box">
                <div className="about-two__img">
                  <img
                    // src="/assets/images/resources/about-two-img-1.jpg"
                    src="/assets/images/about/home-about-image-1.jpg"
                    alt=""
                  />
                </div>
                <div className="about-two__img-2">
                  <img src="/assets/images/about/home-about-image.jpg" alt="" />
                </div>
                <div className="about-two__shape-1"></div>
              </div>
              <div className="about-two__client-box">
                <ul className="about-two__client-img-list list-unstyled">
                  <li>
                    <div className="about-two__client-img">
                      <img
                        src="/assets/images/resources/about-two-client-img-1-1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                  <li>
                    <div className="about-two__client-img">
                      <img
                        src="/assets/images/resources/about-two-client-img-1-2.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                  <li>
                    <div className="about-two__client-img">
                      <img
                        src="/assets/images/resources/about-two-client-img-1-3.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon-plus"></span>
                    </Link>
                  </li>
                </ul>
                <p className="about-two__client-text">
                  <span className="odometer" data-count="120">
                    00
                  </span>
                  <span>K</span> Satisfied Client
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-two__right">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">About Us</span>
                  <div className="section-title__tagline-shape-2"></div>
                </div>
                <h2 className="section-title__title title-animation">
                  Fusion Trade Committed to <br />
                  <span>Smart</span> <br />
                  and Reliable B2B Solutions
                </h2>
              </div>
              <p className="about-two__text">
                Fusion Trade is a B2B supply chain platform that connects
                businesses with trusted suppliers and buyers. We simplify
                sourcing, streamline logistics, and enable fast, secure
                transactions — empowering companies to trade smarter, faster,
                and more efficiently across global markets.
              </p>
              <div className="about-two__points-box">
                <ul className="about-two__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-tick-inside-circle"></span>
                    </div>
                    <p>
                      Tailored Supply Solutions for
                      <br />
                      Every Industry
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-tick-inside-circle"></span>
                    </div>
                    <p>
                      Trusted Procurement with
                      <br />
                      Quality Assurance
                    </p>
                  </li>
                </ul>
                <ul className="about-two__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-tick-inside-circle"></span>
                    </div>
                    <p>
                      Scalable Logistics and
                      <br />
                      Inventory Management
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-tick-inside-circle"></span>
                    </div>
                    <p>
                      Reliable B2B Support with
                      <br />
                      Real-time Order Tracking
                    </p>
                  </li>
                </ul>
              </div>
              <div className="about-two__experience-contact-and-btn">
                <div className="about-two__experience-box">
                  <div className="about-two__experience-count-box">
                    <h3 className="odometer" data-count="25">
                      1
                    </h3>
                    <span>+</span>
                  </div>
                  <p className="about-two__experience-text">
                    Years of <br />
                    Experience
                  </p>
                </div>
                <div className="about-two__call-box">
                  <div className="about-two__call-icon">
                    <span className="icon-customer-service-headset"></span>
                  </div>
                  <div className="about-two__call-content">
                    <span>call us for inquiry</span>
                    <p>
                      <Link to="tel:01919171888">01919171888</Link>
                    </p>
                  </div>
                </div>
                <div className="about-two__btn-box">
                  <Link to="/about" className="thm-btn">
                    About More<span className="icon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
