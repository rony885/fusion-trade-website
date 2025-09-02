import React from "react";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <section className="contact-one">
      <div
        className="contact-one__bg-shape"
        style={{
          backgroundImage: `url('/assets/images/shapes/contact-one-bg-shape.png')`,
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div
              className="contact-one__left wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="contact-one__left-shape-1"></div>
              <div className="contact-one__left-shape-2"></div>
              <h3 className="contact-one__from-title">How Can We Help You?</h3>
              <form className="contact-form-validated contact-one__form">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <h4 className="contact-one__input-title">Full Name</h4>
                    <div className="contact-one__input-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-user-1"></span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Thomas Alison"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <h4 className="contact-one__input-title">Email Address</h4>
                    <div className="contact-one__input-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-email"></span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="thomas@domain.com"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <h4 className="contact-one__input-title">Phone Number</h4>
                    <div className="contact-one__input-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-phone-call"></span>
                      </div>
                      <input
                        type="text"
                        name="Phone"
                        placeholder="+12 (00) 123 4567 890"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <h4 className="contact-one__input-title">Subject</h4>
                    <div className="contact-one__input-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-note"></span>{" "}
                      </div>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Enter your subject"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <h4 className="contact-one__input-title">Inquiry about</h4>
                  <div className="contact-one__input-box text-message-box">
                    <div className="contact-one__input-icon">
                      <span className="icon-edit"></span>
                    </div>
                    <textarea
                      name="message"
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                  <div className="contact-one__btn-box">
                    <button type="submit" className="thm-btn">
                      <span>Submit Now</span>
                      <i className="icon-right-arrow"></i>
                    </button>
                  </div>
                </div>
              </form>
              <div className="result"></div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="contact-one__right">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">Get In Touch</span>
                  <div className="section-title__tagline-shape-2"></div>
                </div>
                <h2 className="section-title__title title-animation">
                  Conversation <span>–</span>
                  <br />
                  <span>Reach Out Anytime</span>
                </h2>
              </div>
              <p className="contact-one__text">
                We're here to listen! Whether you have questions,
                <br />
                feedback, or just want to say hello, feel free to reach out.
              </p>
              <ul className="contact-one__list list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-pin"></span>
                  </div>
                  <div className="content">
                    <h4>Location</h4>
                    <p>
                      1629 N. Dixie Avenue, <br />
                      Kentucky, 42701
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-mail"></span>
                  </div>
                  <div className="content">
                    <h4>Email Us</h4>
                    <p>
                      <Link to="mailto:info@domain.com">info@domain.com</Link>
                    </p>
                    <p>
                      <Link to="mailto:support@domain.com">support@domain.com</Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-phone-call"></span>
                  </div>
                  <div className="content">
                    <h4>Contact</h4>
                    <p>
                      Tel:
                      <Link to="tel:1200456789000">+12 (00) 456 7890 00</Link>
                    </p>
                    <p>
                      Mob: <Link to="tel:9900567780">+99 (00) 567 780</Link>
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

export default ContactInfo;
