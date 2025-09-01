import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutInfo = () => {
  return (
    <Wrapper>
      <section className="about-four">
        <div
          className="about-four__bg-shape"
          style={{
            backgroundImage:
              "url('/assets/images/shapes/about-four-bg-shape.png')",
          }}
        ></div>
        <div
          className="about-four__bg-shape-2"
          style={{
            backgroundImage:
              "url('/assets/images/shapes/about-four-bg-shape-2.png')",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-four__left wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about-four__img-box">
                  <div className="about-four__img">
                    <img
                      src="assets/images/resources/about-four-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="about-four__img-2">
                    <img
                      src="assets/images/resources/about-four-img-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="about-four__experience">
                    <div className="about-four__experience-inner">
                      <div className="about-four__experience-count-box">
                        <h3 className="odometer" data-count="25">
                          1
                        </h3>
                      </div>
                      <p className="about-four__experience-count-text">
                        Years of <br />
                        Experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-four__client-box">
                  <ul className="about-four__client-img-list list-unstyled">
                    <li>
                      <div className="about-four__client-img">
                        <img
                          src="assets/images/resources/about-four-client-img-1-1.jpg"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="about-four__client-img">
                        <img
                          src="assets/images/resources/about-four-client-img-1-2.jpg"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="about-four__client-img">
                        <img
                          src="/assets/images/resources/about-four-client-img-1-3.jpg"
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
                  <p className="about-four__client-text">
                    <span className="odometer" data-count="120">
                      00
                    </span>
                    <span>K</span> Satisfied Client
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-four__right">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-1"></div>
                    <span className="section-title__tagline">About Us</span>
                    <div className="section-title__tagline-shape-2"></div>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Fusion Trade Empowers B2B Companies <br />
                    <span>with Smart Supply Chain Solutions</span> <br />
                    to Connect, Trade & Grow
                  </h2>
                </div>
                <p className="about-four__text">
                  Fusion Trade empowers your business with efficient sourcing,
                  trusted suppliers, and end-to-end supply chain solutions
                  designed to fuel growth.
                </p>

                <ul className="about-four__points-2 list-unstyled mt-5">
                  <li>
                    <div className="icon">
                      <span className="fas fa-shipping-fast fs-1"></span>
                    </div>
                    <div className="content">
                      <h5>Efficient Supply Chain Management</h5>
                      <p>
                        Streamline your procurement and distribution
                        <br />
                        with our expert logistics solutions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fas fa-warehouse fs-1"></span>
                    </div>
                    <div className="content">
                      <h5>Advanced Warehousing</h5>
                      <p>
                        Secure and scalable storage tailored
                        <br />
                        to meet your inventory needs.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fas fa-globe-americas"></span>
                    </div>
                    <div className="content">
                      <h5>Global Sourcing Network</h5>
                      <p>
                        Connect with trusted suppliers
                        <br />
                        worldwide for competitive pricing.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fas fa-headset"></span>
                    </div>
                    <div className="content">
                      <h5>Dedicated Customer Support</h5>
                      <p>
                        24/7 support to assist you
                        <br />
                        every step of the supply chain journey.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about-four__points-2 li {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 30px;
  }
`;

export default AboutInfo;
