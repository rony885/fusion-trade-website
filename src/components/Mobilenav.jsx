import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Mobilenav = ({ menuOpen, closeMenu }) => {
  const location = useLocation();

  // function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <Wrapper>
      <div
        className={`mobile-nav__wrapper ${
          menuOpen ? "mobile-nav__wrapper expanded" : ""
        }`}
      >
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>

        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={closeMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link to="/" aria-label="logo image">
              <img
                src="/assets/images/resources/logo-2.png"
                width="150"
                alt=""
              />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li className={isActive("/") ? "active" : ""} onClick={closeMenu}>
                <Link to="/">Home</Link>
              </li>

              <li
                className={isActive("/about") ? "active" : ""}
                onClick={closeMenu}
              >
                <Link to="/about">About</Link>
              </li>

              <li
                className={isActive("/services") ? "active" : ""}
                onClick={closeMenu}
              >
                <Link to="/services">Services</Link>
              </li>

              <li
                className={isActive("/products") ? "active" : ""}
                onClick={closeMenu}
              >
                <Link to="/products">Products</Link>
              </li>

              <li
                className={isActive("/gallery") ? "active" : ""}
                onClick={closeMenu}
              >
                <Link to="/gallery">Gallery</Link>
              </li>

              <li
                className={isActive("/blog") ? "active" : ""}
                onClick={closeMenu}
              >
                <Link to="/blog">Blog</Link>
              </li>

              <li
                className={isActive("/contact") ? "active" : ""}
                onClick={closeMenu}
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link to="mailto:info@fusiontradebd.com">
                info@fusiontradebd.com
              </Link>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <Link to="tel:01919171888">01919171888</Link>
            </li>
          </ul>

          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link to="#" className="fab fa-facebook-square"></Link>
              <Link to="#" className="fab fa-whatsapp"></Link>
              <Link to="#" className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-menu__list li.active > a {
    color: #ffd25d;
  }
`;

export default Mobilenav;
