import React from "react";
import { Link } from "react-router-dom";

const Choose = () => {
  return (
    <section className="why-choose-one">
      <div className="why-choose-one__shape-3 float-bob-y">
        <img src="/assets/images/shapes/why-choose-one-shape-3.png" alt="" />
      </div>
      <div className="why-choose-one__shape-4"></div>
      <div className="why-choose-one__shape-5"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="why-choose-one__left">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">Why Chooses Us</span>
                  <div className="section-title__tagline-shape-2"></div>
                </div>
                <h2 className="section-title__title title-animation">
                  Elevate Your Business <br />
                  <span>With Fusion Trade's</span> <br />
                  Trusted Supply Chain Solutions
                </h2>
              </div>
              <p className="why-choose-one__text">
                Fusion Trade combines quality products, competitive pricing, and
                smooth delivery — all backed by our commitment to reliability,
                innovation, and customer success. Trade smarter, grow faster,
                and partner with Link name you can trust.
              </p>

              <div className="why-choose-one__btn-and-client-info">
                <div className="why-choose-one__btn-box">
                  <Link to="/contact" className="thm-btn">
                    Contact Us<span className="icon-right-arrow"></span>
                  </Link>
                </div>
                <div className="why-choose-one__client-box">
                  <div className="why-choose-one__client-img">
                    <img
                      src="/assets/images/resources/why-choose-one-client-img.jpg"
                      alt=""
                    />
                  </div>
                  <div className="why-choose-one__client-content">
                    <h3>Rony Ahamed</h3>
                    <span>Managing Director</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div
              className="why-choose-one__right wow slideInRight"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="why-choose-one__img">
                <img
                  src="assets/images/resources/why-choose-one-img-1.png"
                  alt=""
                />
              </div>
              <div className="why-choose-one__shape-1 img-bounce">
                <img
                  src="assets/images/shapes/why-choose-one-shape-1.png"
                  alt=""
                />
              </div>
              <div className="why-choose-one__shape-2 float-bob-x">
                <img
                  src="assets/images/shapes/why-choose-one-shape-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
