import React from "react";
import { Link } from "react-router-dom";

const ErrorInfo = () => {
  return (
    <section className="error-page">
      <div className="container">
        <div className="error-page__inner text-center">
          <div className="error-page__img float-bob-y">
            <img src="/assets/images/resources/error-page-img1.png" alt="" />
          </div>

          <div className="error-page__content">
            <h2>Oops! Page Not Found!</h2>
            <p>
              The page you are looking for does not exist. It might have been
              moved or deleted.
            </p>
            <div className="btn-box">
              <Link className="thm-btn" to="/">
                Back To Home <span className="icon-right-arrow"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorInfo;
