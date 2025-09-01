// import React from "react";
// import { Link } from "react-router-dom";

// const HeroSection = () => {
//   return (
//     <section className="main-slider-two">
//       <div
//         className="swiper-container thm-swiper__slider"
//         data-swiper-options='{"slidesPerView": 1, "loop": true,
//                 "effect": "fade",
//                 "pagination": {
//                 "el": "#main-slider-pagination",
//                 "type": "bullets",
//                 "clickable": true
//                 },
//                 "navigation": {
//                 "nextEl": "#main-slider__swiper-button-next",
//                 "prevEl": "#main-slider__swiper-button-prev"
//                 },
//                 "autoplay": {
//                     "delay": 8000
//                 }
//             }'
//       >
//         <div className="swiper-wrapper">
//           <div className="swiper-slide">
//             <div
//               className="main-slider-two__bg"
//               style={{
//                 backgroundImage:
//                   "url('/assets/images/backgrounds/slider-2-1.jpg')",
//               }}
//             ></div>

//             <div className="main-slider-two__shape-1"></div>
//             <div className="main-slider-two__shape-2 float-bob-x">
//               <img
//                 src="/assets/images/shapes/main-slider-two-shape-2.png"
//                 alt=""
//               />
//             </div>
//             <div className="main-slider-two__shape-3 float-bob-y">
//               <img
//                 src="/assets/images/shapes/main-slider-two-shape-3.png"
//                 alt=""
//               />
//             </div>
//             <div className="container">
//               <div className="row">
//                 <div className="col-xl-12">
//                   <div className="main-slider-two__content">
//                     <div className="main-slider-two__sub-title-box">
//                       <div className="main-slider-two__sub-title-icon">
//                         <img
//                           src="/assets/images/icon/main-slider-sub-title-icon.png"
//                           alt=""
//                         />
//                       </div>
//                       <p className="main-slider-two__sub-title">
//                         IT Solutions Designed for Your Success
//                       </p>
//                     </div>
//                     <h2 className="main-slider-two__title">
//                       Techguru - Smart
//                       <br />
//                       Solutions for Link <br />
//                       <span>Connected world</span>
//                     </h2>
//                     <p className="main-slider-two__text">
//                       From strategic IT consulting to seamless <br />
//                       implementation, we deliver tailored solutions <br />
//                       that drive efficiency
//                     </p>
//                     <div className="main-slider-two__btns-box">
//                       <div className="main-slider-two__btn-box-1">
//                         <Link to="/contact" className="thm-btn">
//                           Get Started<span className="icon-right-arrow"></span>
//                         </Link>
//                       </div>
//                       <div className="main-slider-two__btn-box-2">
//                         <Link to="/about" className="thm-btn">
//                           Read More<span className="icon-right-arrow"></span>
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="main-slider-two__shield-check-icon">
//                       <img
//                         src="/assets/images/icon/main-slider-shield-check-icon.png"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="swiper-slide">
//             <div
//               className="main-slider-two__bg"
//               style={{
//                 backgroundImage:
//                   "url('/assets/images/backgrounds/slider-2-2.jpg')",
//               }}
//             ></div>

//             <div className="main-slider-two__shape-1"></div>
//             <div className="main-slider-two__shape-2 float-bob-x">
//               <img
//                 src="/assets/images/shapes/main-slider-two-shape-2.png"
//                 alt=""
//               />
//             </div>
//             <div className="main-slider-two__shape-3 float-bob-y">
//               <img
//                 src="/assets/images/shapes/main-slider-two-shape-3.png"
//                 alt=""
//               />
//             </div>
//             <div className="container">
//               <div className="row">
//                 <div className="col-xl-12">
//                   <div className="main-slider-two__content">
//                     <div className="main-slider-two__sub-title-box">
//                       <div className="main-slider-two__sub-title-icon">
//                         <img
//                           src="/assets/images/icon/main-slider-sub-title-icon.png"
//                           alt=""
//                         />
//                       </div>
//                       <p className="main-slider-two__sub-title">
//                         IT Solutions Designed for Your Success
//                       </p>
//                     </div>
//                     <h2 className="main-slider-two__title">
//                       <span>Techguru -</span> Empowering
//                       <br />
//                       Innovation Delivering
//                       <br />
//                       Solutions
//                     </h2>
//                     <p className="main-slider-two__text">
//                       From strategic IT consulting to seamless <br />
//                       implementation, we deliver tailored solutions <br />
//                       that drive efficiency
//                     </p>
//                     <div className="main-slider-two__btns-box">
//                       <div className="main-slider-two__btn-box-1">
//                         <Link to="/contact" className="thm-btn">
//                           Get Started<span className="icon-right-arrow"></span>
//                         </Link>
//                       </div>
//                       <div className="main-slider-two__btn-box-2">
//                         <Link to="about" className="thm-btn">
//                           Read More<span className="icon-right-arrow"></span>
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="main-slider-two__shield-check-icon">
//                       <img
//                         src="/assets/images/icon/main-slider-shield-check-icon.png"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="swiper-slide">
//             <div
//               className="main-slider-two__bg"
//               style={{
//                 backgroundImage:
//                   "url('/assets/images/backgrounds/slider-2-3.jpg')",
//               }}
//             ></div>

//             <div className="main-slider-two__shape-1"></div>
//             <div className="main-slider-two__shape-2 float-bob-x">
//               <img
//                 src="/assets/images/shapes/main-slider-two-shape-2.png"
//                 alt=""
//               />
//             </div>
//             <div className="main-slider-two__shape-3 float-bob-y">
//               <img
//                 src="/assets/images/shapes/main-slider-two-shape-3.png"
//                 alt=""
//               />
//             </div>
//             <div className="container">
//               <div className="row">
//                 <div className="col-xl-12">
//                   <div className="main-slider-two__content">
//                     <div className="main-slider-two__sub-title-box">
//                       <div className="main-slider-two__sub-title-icon">
//                         <img
//                           src="/assets/images/icon/main-slider-sub-title-icon.png"
//                           alt=""
//                         />
//                       </div>
//                       <p className="main-slider-two__sub-title">
//                         IT Solutions Designed for Your Success
//                       </p>
//                     </div>
//                     <h2 className="main-slider-two__title">
//                       Tailored IT <span>Strategies</span> <br />
//                       <span>to Drive Your Business</span> <br />
//                       Forward
//                     </h2>
//                     <p className="main-slider-two__text">
//                       From strategic IT consulting to seamless <br />
//                       implementation, we deliver tailored solutions <br />
//                       that drive efficiency
//                     </p>
//                     <div className="main-slider-two__btns-box">
//                       <div className="main-slider-two__btn-box-1">
//                         <Link to="/contact" className="thm-btn">
//                           Get Started<span className="icon-right-arrow"></span>
//                         </Link>
//                       </div>
//                       <div className="main-slider-two__btn-box-2">
//                         <Link to="/about" className="thm-btn">
//                           Read More<span className="icon-right-arrow"></span>
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="main-slider-two__shield-check-icon">
//                       <img
//                         src="/assets/images/icon/main-slider-shield-check-icon.png"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <!-- If we need navigation buttons --> */}
//         <div className="main-slider-two__nav">
//           <div
//             className="swiper-button-prev"
//             id="main-slider__swiper-button-next"
//           >
//             <i className="icon-right-up"></i>
//           </div>
//           <div
//             className="swiper-button-next"
//             id="main-slider__swiper-button-prev"
//           >
//             <i className="icon-right-up"></i>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Slides data
const slides = [
  {
    id: 1,
    heading: "Empowering B2B Supply Chains",
    bg: "/assets/images/backgrounds/slider-2-1.jpg",
    title: (
      <>
        Fusion Trade - <br /> Simplifying <br />
        Bulk Procurement
        <span>Distribution</span>
      </>
    ),
    text: (
      <>
        Our supply chain network ensures smooth <br />
        procurement and delivery, tailored for <br />
        wholesalers and enterprises.
      </>
    ),
  },
  {
    id: 2,
    heading: "Empowering B2B Supply Chains",
    bg: "/assets/images/backgrounds/slider-2-2.jpg",
    title: (
      <>
        <span>Fusion Trade -</span> Simplifying <br /> Bulk Procurement <br />
        Distribution
      </>
    ),
    text: (
      <>
        Our supply chain network ensures smooth <br />
        procurement and delivery, tailored for <br />
        wholesalers and enterprises.
      </>
    ),
  },
  {
    id: 3,
    heading: "Delivering Efficiency Across Industries",
    bg: "/assets/images/backgrounds/slider-2-3.jpg",
    title: (
      <>
        End-to-End <span>Supply Chain</span> <br />
        <span>Solutions for Every Sector</span> <br />
        You Serve
      </>
    ),
    text: (
      <>
        From FMCG to industrial tools, Fusion Trade <br />
        connects suppliers and buyers with reliable <br />
        logistics and transparency.
      </>
    ),
  },
];

const HeroSection = () => {
  return (
    <Wrapper>
      <section className="main-slider-two">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          loop={true}
          effect="fade"
          // pagination={{ clickable: true }}
          pagination={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 8000 }}
          className="thm-swiper__slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="main-slider-two__bg"
                style={{ backgroundImage: `url(${slide.bg})` }}
              ></div>

              <div className="main-slider-two__shape-2 float-bob-x">
                <img
                  src="/assets/images/shapes/main-slider-two-shape-2.png"
                  alt=""
                />
              </div>
              <div className="main-slider-two__shape-3 float-bob-y">
                <img
                  src="/assets/images/shapes/main-slider-two-shape-3.png"
                  alt=""
                />
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider-two__content">
                      <div className="main-slider-two__sub-title-box">
                        <div className="main-slider-two__sub-title-icon">
                          <img
                            src="/assets/images/icon/main-slider-sub-title-icon.png"
                            alt=""
                          />
                        </div>
                        <p className="main-slider-two__sub-title">
                          {slide.heading}
                        </p>
                      </div>
                      <h2 className="main-slider-two__title">{slide.title}</h2>
                      <p className="main-slider-two__text">{slide.text}</p>
                      <div className="main-slider-two__btns-box">
                        <div className="main-slider-two__btn-box-1">
                          <Link to="/contact" className="thm-btn">
                            Get Started
                            <span className="icon-right-arrow"></span>
                          </Link>
                        </div>
                        <div className="main-slider-two__btn-box-2">
                          <Link to="/about" className="thm-btn">
                            Read More<span className="icon-right-arrow"></span>
                          </Link>
                        </div>
                      </div>
                      <div className="main-slider-two__shield-check-icon">
                        <img
                          src="/assets/images/icon/main-slider-shield-check-icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation */}
          <div className="main-slider-two__nav">
            <div className="swiper-button-prev">
              <i className="icon-right-up"></i>
            </div>
            <div className="swiper-button-next">
              <i className="icon-right-up"></i>
            </div>
          </div>
        </Swiper>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default HeroSection;
