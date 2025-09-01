import React from "react";

const Choose = () => {
  return (
    <section className="why-choose-three">
      <div
        className="why-choose-three__bg-shape float-bob-x"
        style={{
          backgroundImage:
            "url('/assets/images/shapes/why-choose-three-bg-shape.png')",
        }}
      ></div>
      <div className="why-choose-three__shape-1"></div>
      <div className="why-choose-three__shape-2"></div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-1"></div>
            <span className="section-title__tagline">Why Choose Us</span>
            <div className="section-title__tagline-shape-2"></div>
          </div>
          <h2 className="section-title__title title-animation">
            Choose <span>Fusion Trade</span> for Reliable Solutions,
            <br />
            High-Standard Products, and
            <span> Prices That Fit Your Business</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-3 wow fadeInLeft" data-wow-delay="100ms">
            <div className="why-choose-three__single-left">
              <div className="why-choose-three__single">
                <div className="why-choose-three__icon">
                  <span className="icon-quality"></span>
                </div>
                <h3 className="why-choose-three__title">
                  Unmatched Product Quality
                </h3>
                <div className="why-choose-three__bdr"></div>
                <p className="why-choose-three__text">
                  We ensure high-quality sourcing and supply for businesses of
                  all sizes, maintaining excellence at every step.
                </p>
              </div>
              <div className="why-choose-three__single">
                <div className="why-choose-three__icon">
                  <span className="icon-team"></span>
                </div>
                <h3 className="why-choose-three__title">
                  Expert Supply Chain Team
                </h3>
                <div className="why-choose-three__bdr"></div>
                <p className="why-choose-three__text">
                  Our experienced professionals manage procurement and logistics
                  with precision and care.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="why-choose-three__img">
              <img
                src="assets/images/resources/why-choose-three-img.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-3 wow fadeInRight" data-wow-delay="100ms">
            <div className="why-choose-three__single-left">
              <div className="why-choose-three__single">
                <div className="why-choose-three__icon">
                  <span className="icon-customer-centricity"></span>
                </div>
                <h3 className="why-choose-three__title">
                  Client-Centered Service
                </h3>
                <div className="why-choose-three__bdr"></div>
                <p className="why-choose-three__text">
                  We tailor every order and delivery to meet your B2B business
                  demands—your success is our goal.
                </p>
              </div>
              <div className="why-choose-three__single">
                <div className="why-choose-three__icon">
                  <span className="icon-support"></span>
                </div>
                <h3 className="why-choose-three__title">
                  Trusted by Businesses
                </h3>
                <div className="why-choose-three__bdr"></div>
                <p className="why-choose-three__text">
                  Fusion Trade is a preferred B2B partner for companies across
                  industries seeking dependable supply solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
