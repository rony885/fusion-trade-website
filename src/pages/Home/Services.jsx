import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import serviceData from "../../serviceData.js";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(serviceData);
  }, []);

  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      &#8250;
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      &#8249;
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }, // Desktop
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }, // Tablet
      },
      {
        breakpoint: 425,
        settings: { slidesToShow: 1 }, // Mobile
      },
    ],
  };

  return (
    <Wrapper>
      <section className="services-two">
        <div className="services-two__shape-1"></div>
        <div className="container">
          <div className="services-two__top">
            <div className="section-title text-left sec-title-animation animation-style2">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape-1"></div>
                <span className="section-title__tagline">Our Services</span>
                <div className="section-title__tagline-shape-2"></div>
              </div>
              <h2
                className="section-title__title title-animation mb-3"
                style={{ fontSize: "30px" }}
              >
                Fusion Trade delivers reliable B2B sourcing and logistics
              </h2>
              <h2 className="spanText mb-3">
                From medical to electrical & packaging solutions
              </h2>
              <h2 className="spanText">Ensuring quality, speed & trust</h2>
            </div>

            <Link to="/services" className="services-two__round-text-box">
              <div className="services-two__round-text-box-outer">
                <div className="services-two__round-text-box-inner">
                  <div className="services-two__curved-circle">
                    View All Services
                  </div>
                  <div className="services-two__round-icon">
                    <img
                      src="/assets/images/icon/services-two-round-icon.png"
                      alt="Services Icon"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="services-two__bottom">
            <Slider {...settings} className="custom-slider">
              {services.map((service, index) => (
                <div key={index} className="slider-item">
                  <div className="services-three__single">
                    <div className="services-three__icon-and-title">
                      <div className="services-three__icon">
                        <img src={service.image} alt="Services Icon" />
                      </div>
                      <h3 className="services-three__title">
                        <Link to={service.link}>{service.title}</Link>
                      </h3>
                    </div>
                    <p className="services-three__text">{service.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    z-index: 2;
    cursor: pointer;
    color: #fff;
    border: 1px solid #4b8ef3;
    border-radius: 10px;
    padding: 7px 15px 7px 15px;
    font-size: 20px;
    font-weight: bold;
    transition: 0.3s all ease-in-out;
  }
  .arrow:hover {
    background-color: #4b8ef3;
  }
  .prev {
    left: 10px;
  }
  .next {
    right: 10px;
  }

  .spanText {
    font-size: 30px;
    /* color: #ffc009; */
    color: #ffd25d;
    text-transform: capitalize;
    font-family: var(--techguru-font-two);
  }
  .custom-slider .slick-slide {
    padding: 0 25px;
    box-sizing: border-box;
  }

  .slider-item .services-three__single {
    height: 300px;
    width: 100%;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .services-three__icon-and-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }

  .services-three__icon img {
    width: 80px;
    height: 70px;
    transition: transform 0.3s ease, filter 0.3s ease;
    cursor: pointer;
  }

  .services-three__icon img:hover {
    transform: scale(1.1); /* slightly zoom */
    filter: brightness(1.2); /* make it brighter */
  }

  /* Responsive fix */
  @media (max-width: 425px) {
    .slider-item .services-three__single {
      height: auto;
    }
  }
`;

export default Services;
