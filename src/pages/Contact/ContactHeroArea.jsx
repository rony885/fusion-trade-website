import React from "react";
import { Link } from "react-router-dom";

const ContactHeroArea = () => {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{
          backgroundImage: `url('/assets/images/backgrounds/page-header-bg.jpg')`,
        }}
      ></div>
      <div className="container">
        <div className="page-header__inner">
          <h2>Contact Us</h2>
          <div className="thm-breadcrumb__box">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link to="/">
                  <i className="fas fa-home"></i>Home
                </Link>
              </li>
              <li>
                <span className="icon-right-arrow-1"></span>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroArea;
