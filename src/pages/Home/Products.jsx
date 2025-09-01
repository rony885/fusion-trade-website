import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productData from "../../productData.js";
import { Link } from "react-router-dom";

// const teamData = [
//   {
//     id: 1,
//     name: "Sophia Bennett",
//     role: "CEO & Founder",
//     image: "assets/images/team/team-2-1.jpg",
//     social: ["facebook", "dribble", "linkedin"],
//   },
//   {
//     id: 2,
//     name: "Liam Johnson",
//     role: "Operations Manager",
//     image: "assets/images/team/team-2-2.jpg",
//     social: ["facebook", "dribble", "linkedin"],
//   },
//   {
//     id: 3,
//     name: "Ethan Miller",
//     role: "Lead Designer",
//     image: "assets/images/team/team-2-3.jpg",
//     social: ["facebook", "dribble", "linkedin"],
//   },
//   {
//     id: 4,
//     name: "Olivia Smith",
//     role: "Lead Designer",
//     image: "assets/images/team/team-2-2.jpg",
//     social: ["facebook", "dribble", "linkedin"],
//   },
//   {
//     id: 5,
//     name: "Ryan Wilson",
//     role: "Lead Designer",
//     image: "assets/images/team/team-2-3.jpg",
//     social: ["facebook", "dribble", "linkedin"],
//   },
// ];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <span className="fa fa-angle-right"></span>
  </div>
);
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <span className="fa fa-angle-left"></span>
  </div>
);

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } }, // large screens
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } }, // tablet
      { breakpoint: 425, settings: { slidesToShow: 1 } }, // mobile
      { breakpoint: 375, settings: { slidesToShow: 1 } }, // small mobile
      { breakpoint: 320, settings: { slidesToShow: 1 } }, // extra small
    ],
  };

  return (
    <Wrapper>
      <section className="team-two">
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape-1"></div>
              <span className="section-title__tagline">B2b Products</span>
              <div className="section-title__tagline-shape-2"></div>
            </div>
            <h2 className="section-title__title title-animation">
              Explore Our Product <span>Solutions</span>
              <br />
              <span>Empowering Your Business Supply Chain</span>
            </h2>
          </div>

          <Slider {...sliderSettings}>
            {products.map((product) => (
              <div className="team-two__single" key={product.id}>
                <div className="team-two__single-inner">
                  <div className="team-two__img-box">
                    <div className="team-two__img">
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "410px", height: "450px" }}
                      />
                    </div>

                    <div className="team-two__title-box text-center">
                      <h3 className="fs-5">{product.name}</h3>
                      {/* <p>{product.role}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="why-choose-one__btn-box text-center mt-4">
            <Link className="thm-btn" to="/products">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .team-two__img-box {
    border: 1px solid #ddd;
    border-radius: 20px;
  }
  .team-two__img::before {
    background: none !important;
  }

  .custom-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background-color: rgb(32, 39, 58);
    border: 1px solid rgb(86, 164, 236);
    color: #fff;
    width: 40px;
    height: 45px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .custom-prev {
    left: -20px;
  }
  .custom-next {
    right: -20px;
  }
  .custom-arrow:hover {
    background: #4b8ff2;
  }

  /* Slide gap */
  .team-two__single {
    padding: 0 15px;
    box-sizing: border-box;
  }
  .slick-list {
    margin: 0 -15px;
  }

  .team-two__img-box {
    position: relative; /* keep for absolute child */
  }

  .team-two__title-box {
    position: absolute;
    bottom: 18px;
    left: 50%; /* move to center */
    transform: translateX(-50%); /* truly center horizontally */
    text-align: center;
    z-index: 1;
  }

  /* Optional media queries for extra adjustments */
  @media only screen and (max-width: 768px) {
    .custom-prev {
      left: -15px;
    }
    .custom-next {
      right: -15px;
    }
    .team-two__single {
      padding: 0 10px;
    }
    .slick-list {
      margin: 0 -10px;
    }
  }
  @media only screen and (max-width: 425px) {
    .custom-prev {
      left: -10px;
    }
    .custom-next {
      right: -10px;
    }
    .team-two__single {
      padding: 0 5px;
    }
    .slick-list {
      margin: 0 -5px;
    }
  }
`;

export default Products;
