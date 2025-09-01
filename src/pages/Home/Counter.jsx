import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <section className="counter-two">
      <div
        className="counter-two__bg-shape"
        style={{
          backgroundImage:
            "url(/assets/images/backgrounds/counter-two-bg-shape.png)",
        }}
      ></div>
      <div className="container">
        <div className="row">
          {/* Counter Two Single Start */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="counter-two__single">
              <div className="counter-two__icon-inner">
                <div className="counter-two__icon">
                  <span className="icon-trophy"></span>
                </div>
              </div>
              <div className="counter-two__content">
                <div className="counter-two__count-box">
                  <h3 className="odometer">
                    <CountUp end={120} duration={3} />
                  </h3>
                  <span>+</span>
                </div>
                <p className="counter-two__text">Creative Plus Award</p>
              </div>
            </div>
          </div>

          {/* Counter Two Single */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="counter-two__single">
              <div className="counter-two__icon-inner">
                <div className="counter-two__icon">
                  <span className="icon-user"></span>
                </div>
              </div>
              <div className="counter-two__content">
                <div className="counter-two__count-box">
                  <h3 className="odometer">
                    <CountUp end={300} duration={3} />
                  </h3>
                  <span>+</span>
                </div>
                <p className="counter-two__text">Expert Team Members</p>
              </div>
            </div>
          </div>

          {/* Counter Two Single */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="counter-two__single">
              <div className="counter-two__icon-inner">
                <div className="counter-two__icon">
                  <span className="icon-chat"></span>
                </div>
              </div>
              <div className="counter-two__content">
                <div className="counter-two__count-box">
                  <h3 className="odometer">
                    <CountUp end={20} duration={3} />
                  </h3>
                  <span>M</span>
                </div>
                <p className="counter-two__text">Happy Clients Review</p>
              </div>
            </div>
          </div>

          {/* Counter Two Single */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="counter-two__single">
              <div className="counter-two__icon-inner">
                <div className="counter-two__icon">
                  <span className="icon-folder"></span>
                </div>
              </div>
              <div className="counter-two__content">
                <div className="counter-two__count-box">
                  <h3 className="odometer">
                    <CountUp end={150} duration={3} decimals={1} />
                  </h3>
                  <span>K</span>
                </div>
                <p className="counter-two__text">Project Completed</p>
              </div>
            </div>
          </div>
          {/* Counter Two Single End */}
        </div>
      </div>
    </section>
  );
};

export default Counter;
