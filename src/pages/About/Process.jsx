import React from "react";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <section className="process-one">
      <div className="process-one__shape-1">
        <img src="assets/images/shapes/process-one-shape-1.png" alt="" />
      </div>
      <div className="process-one__shape-2"></div>
      <div className="process-one__shape-3"></div>
      <div
        className="process-one__bg-shape"
        style={{
          backgroundImage:
            "url('/assets/images/shapes/process-one-bg-shape.png')",
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="process-one__left">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">
                    Working Process
                  </span>
                  <div className="section-title__tagline-shape-2"></div>
                </div>
                <h2 className="section-title__title title-animation">
                  How We <span>Power Supply Chains</span> <br />
                  <span>Across Every</span> Business
                </h2>
              </div>
              <p className="process-one__text">
                From procurement to delivery, we focus on
                <br />
                efficiency, reliability, and customer satisfaction.
              </p>
              <div className="process-one__btn-box">
                <Link to="#" className="thm-btn">
                  Get in Touch<span className="icon-right-arrow"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="process-one__right">
              <ul className="process-one__process-list list-unstyled">
                <li>
                  <div className="process-one__process-count"></div>
                  <div className="process-one__process-content">
                    <h3 className="process-one__process-title">
                      Requirement Analysis
                    </h3>
                    <p className="process-one__process-text">
                      We work closely with clients to assess <br />
                      their sourcing and logistics needs, <br />
                      creating a customized plan.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="process-one__process-content">
                    <h3 className="process-one__process-title">
                      Procurement & Fulfillment
                    </h3>
                    <p className="process-one__process-text">
                      We source high-quality products, <br />
                      manage inventory, and ensure timely <br />
                      and accurate fulfillment.
                    </p>
                  </div>
                  <div className="process-one__process-count"></div>
                </li>
                <li>
                  <div className="process-one__process-count"></div>
                  <div className="process-one__process-content">
                    <h3 className="process-one__process-title">
                      Delivery & Ongoing Support
                    </h3>
                    <p className="process-one__process-text">
                      We deliver to your doorstep and <br />
                      provide dedicated support for <br />
                      continuous business efficiency.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
