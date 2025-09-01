import React from "react";
import styled from "styled-components";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <footer className="site-footer-two">
        {/* Shapes */}
        <div className="site-footer-two__shape-1"></div>
        <div className="site-footer-two__shape-2"></div>
        <div className="site-footer-two__shape-3"></div>

        {/* Top Section */}
        <div className="site-footer-two__top">
          <div className="container">
            <div className="row">
              {/* Contact Info */}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget-two__quick-links">
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
                          <a
                            className="site-footer-two__contact-mail"
                            href="mailto:info@fusiontradebd.com"
                          >
                            info@fusiontradebd.com
                          </a>
                          <a
                            className="site-footer-two__contact-phone"
                            href="tel:01919171888"
                          >
                            01919171888
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Dhaka Office */}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget-two__support">
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

              {/* Mymensingh Office */}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget-two__services">
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

        {/* Bottom Section */}
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
    padding: 10px 0 50px;
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
  }
`;

export default Footer;
