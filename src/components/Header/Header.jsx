import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Header = ({ toggleMenu, menuOpen, closeMenu }) => {
  const location = useLocation(); // get current path

  // function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Wrapper>
        <header className="main-header-two">
          <div className="main-menu-two__top">
            <div className="main-menu-two__top-inner">
              <p className="main-menu-two__top-text">
                Fusion Trade — Where Reliability Meets Every Delivery, Every
                Time
              </p>
              <ul className="list-unstyled main-menu-two__contact-list">
                <li>
                  <div className="icon">
                    <i className="icon-pin"></i>
                  </div>
                  <div className="text">
                    <p>Ga -27/2 A, Shahjadpur, Gulshan, Dhaka-1212</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-search-mail"></i>
                  </div>
                  <div className="text">
                    <p>
                      <Link to="mailto:info@fusiontradebd.com">
                        info@fusiontradebd.com
                      </Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-phone-call"></i>
                  </div>
                  <div className="text">
                    <p>
                      <Link to="tel:01919171888">01919171888</Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <nav className="main-menu main-menu-two">
            <div className="main-menu-two__wrapper">
              <div className="main-menu-two__wrapper-inner">
                <div className="main-menu-two__left">
                  <div className="main-menu-two__logo">
                    <Link to="/">
                      <img
                        src="/assets/images/resources/logo-1.png"
                        alt="Logo"
                      />
                    </Link>
                  </div>
                </div>

                <div className="main-menu-two__main-menu-box">
                  <Link
                    to="#"
                    className="mobile-nav__toggler"
                    onClick={toggleMenu}
                  >
                    <i className="fa fa-bars"></i>
                  </Link>

                  <ul className="main-menu__list">
                    <li
                      className={`megamenu ${isActive("/") ? "active" : ""}`}
                      onClick={closeMenu}
                    >
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
              </div>
            </div>
          </nav>
        </header>

        {/* Sticky Header */}
        <div className="stricky-header stricked-menu main-menu main-menu-two">
          <div className="sticky-header__content">
            <div className="main-menu-two__wrapper">
              <div className="main-menu-two__wrapper-inner">
                <div className="main-menu-two__left">
                  <div className="main-menu-two__logo">
                    <Link to="/">
                      <img src="/assets/images/resources/logo-1.png" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="main-menu-two__main-menu-box">
                  <Link to="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars"></i>
                  </Link>

                  <ul className="main-menu__list">
                    <li className={isActive("/") ? "active" : ""}>
                      <Link to="/">Home </Link>
                    </li>

                    <li className={isActive("/about") ? "active" : ""}>
                      <Link to="/about">About</Link>
                    </li>

                    <li className={isActive("/services") ? "active" : ""}>
                      <Link to="/services">Services</Link>
                    </li>

                    <li className={isActive("/products") ? "active" : ""}>
                      <Link to="/products">Products</Link>
                    </li>

                    <li className={isActive("/gallery") ? "active" : ""}>
                      <Link to="/gallery">Gallery</Link>
                    </li>

                    <li className={isActive("/blog") ? "active" : ""}>
                      <Link to="/blog">Blog</Link>
                    </li>

                    <li className={isActive("/contact") ? "active" : ""}>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .main-menu__list li.active > a {
    color: #ffd25d;
  }
`;

export default Header;
