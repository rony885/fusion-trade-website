import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <footer className="site-footer-two">
        <div className="site-footer-two__shape-1"></div>
        <div className="site-footer-two__shape-2"></div>
        <div className="site-footer-two__shape-3"></div>
        <div className="site-footer-two__top">
          <div className="container">
            <div className="row">
              {/* <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="site-footer-two__about">
                <div className="site-footer-two__logo">
                  <Link to="/">
                    <img
                      src="/assets/images/resources/footer-logo.png"
                      alt=""
                    />
                  </Link>
                </div>
                <ul className="list-unstyled site-footer-two__contact-list">
                  <li>
                    <div className="site-footer-two__contact-icon">
                      <span className="icon-contact"></span>
                    </div>
                    <div className="site-footer-two__contact-content">
                      <h5 className="site-footer-two__contact-title">
                        Contact Info
                      </h5>
                      <p className="site-footer-two__contact-info">
                        <Link
                          to="mailto:info@fusiontradebd.com"
                          className="site-footer-two__contact-mail"
                        >
                          info@fusiontradebd.com
                        </Link>
                        <Link
                          to="tel:01919171888"
                          className="site-footer-two__contact-phone"
                        >
                          01919171888
                        </Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="site-footer-two__contact-icon">
                      <span className="icon-pin"></span>
                    </div>
                    <div className="site-footer-two__contact-content">
                      <h5 className="site-footer-two__contact-title">
                        Dhaka Office
                      </h5>
                      <p className="site-footer-two__contact-info">
                        Ga -27/2 A, Shahjadpur, <br />
                        Gulshan, Dhaka-1212
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="site-footer-two__contact-icon">
                      <span className="icon-pin"></span>
                    </div>
                    <div className="site-footer-two__contact-content">
                      <h5 className="site-footer-two__contact-title">
                        Mymensingh Office
                      </h5>
                      <p className="site-footer-two__contact-info">
                        32 Jubed Ali Road, Kanchijuly, <br />
                        Mymensingh-2200
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}

              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                {/* <div className="footer-widget-two__quick-links">
                <h4 className="footer-widget-two__title">Pages</h4>
                <ul className="footer-widget-two__quick-links-list list-unstyled">
                  <li>
                    <Link to="index.html">
                      <span className="icon-right-arrow-2"></span>Home
                    </Link>
                  </li>
                  <li>
                    <Link to="about.html">
                      <span className="icon-right-arrow-2"></span>About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="pricing.html">
                      <span className="icon-right-arrow-2"></span>Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="portfolio.html">
                      <span className="icon-right-arrow-2"></span>Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to="blog.html">
                      <span className="icon-right-arrow-2"></span>Blogs
                    </Link>
                  </li>
                  <li>
                    <Link to="contact.html">
                      <span className="icon-right-arrow-2"></span>Careers
                    </Link>
                  </li>
                </ul>
              </div> */}
                <div className="site-footer-two__about">
                  <ul className="list-unstyled site-footer-two__contact-list">
                    <li>
                      <div className="site-footer-two__contact-icon">
                        <span className="icon-contact"></span>
                      </div>
                      <div className="site-footer-two__contact-content">
                        <h5 className="site-footer-two__contact-title">
                          Contact Info
                        </h5>
                        <p className="site-footer-two__contact-info">
                          <Link
                            to="mailto:info@fusiontradebd.com"
                            className="site-footer-two__contact-mail"
                          >
                            info@fusiontradebd.com
                          </Link>
                          <Link
                            to="tel:01919171888"
                            className="site-footer-two__contact-phone"
                          >
                            01919171888
                          </Link>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                {/* <div className="footer-widget-two__support">
                <h4 className="footer-widget-two__title">Support</h4>
                <ul className="footer-widget-two__quick-links-list list-unstyled">
                  <li>
                    <Link to="about.html">
                      <span className="icon-right-arrow-2"></span>Terms &
                      Condition
                    </Link>
                  </li>
                  <li>
                    <Link to="faq.html">
                      <span className="icon-right-arrow-2"></span>FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="contact.html">
                      <span className="icon-right-arrow-2"></span>Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="404.html">
                      <span className="icon-right-arrow-2"></span>404 Page
                    </Link>
                  </li>
                  <li>
                    <Link to="contact.html">
                      <span className="icon-right-arrow-2"></span>Live Chat
                    </Link>
                  </li>
                  <li>
                    <Link to="services.html">
                      <span className="icon-right-arrow-2"></span>Our Services
                    </Link>
                  </li>
                </ul>
              </div> */}
                <div className="site-footer-two__about">
                  <ul className="list-unstyled site-footer-two__contact-list">
                    <li>
                      <div className="site-footer-two__contact-icon">
                        <span className="icon-pin"></span>
                      </div>
                      <div className="site-footer-two__contact-content">
                        <h5 className="site-footer-two__contact-title">
                          Dhaka Office
                        </h5>
                        <p className="site-footer-two__contact-info">
                          Ga -27/2 A, Shahjadpur, <br />
                          Gulshan, Dhaka-1212
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                {/* <div className="footer-widget-two__services">
                <h4 className="footer-widget-two__title">Our Services</h4>
                <ul className="footer-widget-two__quick-links-list list-unstyled">
                  <li>
                    <Link to="services.html">
                      <span className="icon-right-arrow-2"></span>UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link to="about.html">
                      <span className="icon-right-arrow-2"></span>Website Design
                    </Link>
                  </li>
                  <li>
                    <Link to="pricing.html">
                      <span className="icon-right-arrow-2"></span>Web
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link to="about.html">
                      <span className="icon-right-arrow-2"></span>Product Design
                    </Link>
                  </li>
                  <li>
                    <Link to="blog.html">
                      <span className="icon-right-arrow-2"></span>Online
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link to="contact.html">
                      <span className="icon-right-arrow-2"></span>Personal
                      Branding
                    </Link>
                  </li>
                </ul>
              </div> */}
                <div className="site-footer-two__about">
                  <ul className="list-unstyled site-footer-two__contact-list">
                    <li>
                      <div className="site-footer-two__contact-icon">
                        <span className="icon-pin"></span>
                      </div>
                      <div className="site-footer-two__contact-content">
                        <h5 className="site-footer-two__contact-title">
                          Mymensingh Office
                        </h5>
                        <p className="site-footer-two__contact-info">
                          32 Jubed Ali Road, Kanchijuly, <br />
                          Mymensingh-2200
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer-two__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer-two__bottom-inner">
                  {/* Copyright */}
                  <div className="site-footer-two__copyright">
                    <div className="copyright">
                      <a
                        rel="noopener noreferrer"
                        href="https://www.ekattorit.com/"
                        target="_blank"
                      >
                        <small className="small">
                          <small
                            className="footer text-white"
                            style={{ fontSize: "16px" }}
                          >
                            © Copyright {currentYear},
                          </small>
                          &nbsp;
                          <span className="text-white">
                            Designed &amp; Developed By&nbsp;
                          </span>
                          <span style={{ color: "red" }}>EKATTOR</span>
                          <span style={{ color: "green" }}> iT</span>
                        </small>
                      </a>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="site-footer-two__social-box">
                    <h4 className="site-footer-two__social-title">
                      Follow Us:
                    </h4>
                    <div className="site-footer-two__social-box-inner">
                      <a
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/"
                        target="_blank"
                      >
                        <span className="icon-facebook"></span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="https://web.whatsapp.com/"
                        target="_blank"
                      >
                        <span className="fab fa-whatsapp"></span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/"
                        target="_blank"
                      >
                        <span className="fab fa-instagram"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .site-footer-two__top {
    position: relative;
    display: block;
    padding: 50px 0 50px;
  }

  .site-footer-two__about {
    position: relative;
    display: block;
    padding: 45px 48px 43px;
    background-color: transparent; /* No background */
    border-radius: 40px;
  }

  .site-footer-two__contact-list li:before {
    content: "";
    position: absolute;
    height: 0px;
  }

  /* .site-footer-two__top {
    position: relative;
    display: block;
    padding: 50px 0 50px;
  }
  .footer-widget-two__quick-links {
    position: relative;
    display: block;
    margin-top: 77px !important;
    margin-left: 50px;
  }

  .site-footer-two__contact-list li:before {
    content: "";
    position: absolute;
    top: -40px;
    left: 0;
    right: 169px;
    height: 0px;
    background: rgb(143, 136, 255);
    background: linear-gradient(
      90deg,
      rgba(143, 136, 255, 1) 14%,
      rgba(143, 136, 255, 0) 100%
    );
  } */
`;

export default Footer;
