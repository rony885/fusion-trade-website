// import React from "react";

// const ContactInfo = () => {
//   return (
//     <section className="contact-one">
//       <div
//         className="contact-one__bg-shape"
//         style={{
//           backgroundImage: `url('/assets/images/shapes/contact-one-bg-shape.png')`,
//         }}
//       ></div>
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-6 col-lg-6">
//             <div
//               className="contact-one__left wow slideInLeft"
//               data-wow-delay="100ms"
//               data-wow-duration="2500ms"
//             >
//               <div className="contact-one__left-shape-1"></div>
//               <div className="contact-one__left-shape-2"></div>
//               <h3 className="contact-one__from-title">How Can We Help You?</h3>
//               <form className="contact-form-validated contact-one__form">
//                 <div className="row">
//                   <div className="col-xl-6 col-lg-6">
//                     <h4 className="contact-one__input-title">Full Name</h4>
//                     <div className="contact-one__input-box">
//                       <div className="contact-one__input-icon">
//                         <span className="icon-user-1"></span>
//                       </div>
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Thomas Alison"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                   <div className="col-xl-6 col-lg-6">
//                     <h4 className="contact-one__input-title">Email Address</h4>
//                     <div className="contact-one__input-box">
//                       <div className="contact-one__input-icon">
//                         <span className="icon-email"></span>
//                       </div>
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="thomas@domain.com"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                   <div className="col-xl-6 col-lg-6">
//                     <h4 className="contact-one__input-title">Phone Number</h4>
//                     <div className="contact-one__input-box">
//                       <div className="contact-one__input-icon">
//                         <span className="icon-phone-call"></span>
//                       </div>
//                       <input
//                         type="text"
//                         name="Phone"
//                         placeholder="+12 (00) 123 4567 890"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                   <div className="col-xl-6 col-lg-6">
//                     <h4 className="contact-one__input-title">Subject</h4>
//                     <div className="contact-one__input-box">
//                       <div className="contact-one__input-icon">
//                         <span className="icon-note"></span>{" "}
//                       </div>
//                       <input
//                         type="text"
//                         name="subject"
//                         placeholder="Enter your subject"
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-xl-12">
//                   <h4 className="contact-one__input-title">Inquiry about</h4>
//                   <div className="contact-one__input-box text-message-box">
//                     <div className="contact-one__input-icon">
//                       <span className="icon-edit"></span>
//                     </div>
//                     <textarea
//                       name="message"
//                       placeholder="Write your message"
//                     ></textarea>
//                   </div>
//                   <div className="contact-one__btn-box">
//                     <button type="submit" className="thm-btn">
//                       <span>Submit Now</span>
//                       <i className="icon-right-arrow"></i>
//                     </button>
//                   </div>
//                 </div>
//               </form>
//               <div className="result"></div>
//             </div>
//           </div>
//           <div className="col-xl-6 col-lg-6">
//             <div className="contact-one__right">
//               <div className="section-title text-left sec-title-animation animation-style2">
//                 <div className="section-title__tagline-box">
//                   <div className="section-title__tagline-shape-1"></div>
//                   <span className="section-title__tagline">Get In Touch</span>
//                   <div className="section-title__tagline-shape-2"></div>
//                 </div>
//                 <h2 className="section-title__title title-animation">
//                   Conversation <span>–</span>
//                   <br />
//                   <span>Reach Out Anytime</span>
//                 </h2>
//               </div>
//               <p className="contact-one__text">
//                 We're here to listen! Whether you have questions,
//                 <br />
//                 feedback, or just want to say hello, feel free to reach out.
//               </p>
//               <ul className="contact-one__list list-unstyled">
//                 <li>
//                   <div className="icon">
//                     <span className="icon-pin"></span>
//                   </div>
//                   <div className="content">
//                     <h4>Location</h4>
//                     <p>
//                       1629 N. Dixie Avenue, <br />
//                       Kentucky, 42701
//                     </p>
//                   </div>
//                 </li>
//                 <li>
//                   <div className="icon">
//                     <span className="icon-mail"></span>
//                   </div>
//                   <div className="content">
//                     <h4>Email Us</h4>
//                     <p>
//                       <a href="mailto:info@domain.com">info@domain.com</a>
//                     </p>
//                     <p>
//                       <a href="mailto:support@domain.com">support@domain.com</a>
//                     </p>
//                   </div>
//                 </li>
//                 <li>
//                   <div className="icon">
//                     <span className="icon-phone-call"></span>
//                   </div>
//                   <div className="content">
//                     <h4>Contact</h4>
//                     <p>
//                       Tel:
//                       <a href="tel:1200456789000">+12 (00) 456 7890 00</a>
//                     </p>
//                     <p>
//                       Mob: <a href="tel:9900567780">+99 (00) 567 780</a>
//                     </p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactInfo;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <Wrapper>
      <section className="contact-two">
        <div
          className="contact-two__bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/contact-two-bg.jpg)",
          }}
        ></div>

        <div className="contact-two__shape-1 float-bob-y">
          <img src="/assets/images/shapes/contact-two-shape-1.png" alt="" />
        </div>
        <div className="contact-two__shape-2"></div>

        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-xl-6">
              <div className="contact-two__left">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-1"></div>
                    <span className="section-title__tagline">Get In Touch</span>
                    <div className="section-title__tagline-shape-2"></div>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Conversation <span>– Reach</span> <br />
                    <span>Out Anytime</span>
                  </h2>
                </div>

                <p className="contact-two__text">
                  We're here to listen! Whether you have <br />
                  questions, feedback, or just want to say hello, <br />
                  feel free to reach out.
                </p>

                <ul className="contact-two__contact-list list-unstyled w-100">
                  <li>
                    <div className="icon">
                      <span className="icon-mail"></span>
                    </div>
                    <div className="content">
                      <span>Email Us</span>
                      <p>
                        <Link to="mailto:info@fusiontradebd.com">
                          info@fusiontradebd.com
                        </Link>
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <span className="icon-phone-call"></span>
                    </div>
                    <div className="content">
                      <span>Contact US</span>
                      <p>
                        <Link to="tel:01919171888">01919171888</Link>
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <span className="icon-pin"></span>
                    </div>
                    <div className="content">
                      <span>Dhaka Office</span>
                      <p>Ga -27/2 A, Shahjadpur, Gulshan, Dhaka-1212</p>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <span className="icon-pin"></span>
                    </div>
                    <div className="content">
                      <span>Mymensingh Office</span>
                      <p>32 Jubed Ali Road, Kanchijuly, Mymensingh-2200</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-xl-6">
              <div
                className="contact-two__right wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
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
                          required
                          // placeholder="Thomas Alison"
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                      <h4 className="contact-one__input-title">
                        Email Address
                      </h4>
                      <div className="contact-one__input-box">
                        <div className="contact-one__input-icon">
                          <span className="icon-email"></span>
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          // placeholder="thomas@domain.com"
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
                          required
                          // placeholder="+12 (00) 123 4567 890"
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                      <h4 className="contact-one__input-title">Subject</h4>
                      <div className="contact-one__input-box">
                        <div className="contact-one__input-icon">
                          <span className="fa fa-edit"></span>
                        </div>
                        <input
                          type="text"
                          name="subject"
                          required
                          // placeholder="Enter your subject"
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
                        // placeholder="Write your message"
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
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-two__contact-list li .content p a {
    color: var(--techguru-white);
    font-size: 18px !important;
  }

  .contact-two__contact-list li .content p {
    font-size: 18px !important;
    font-family: sans-serif;
  }

  @media screen and (max-width: 1024px) {
    .contact-two__text {
      margin-bottom: 40px;
    }
    .contact-two__contact-list {
      width: 100% !important;
      max-width: 100% !important;
      display: block !important; /* override any grid/flex */
      padding: 0 !important;
      margin: 0 !important;
    }

    .contact-two__contact-list > li {
      width: 100% !important;
      display: flex !important; /* icon + text side-by-side */
      align-items: flex-start;
      gap: 12px;
      margin: 0 0 12px 0 !important;
      float: none !important; /* override float-based layouts */
      clear: both !important;
    }

    .contact-two__contact-list > li .icon {
      flex: 0 0 auto;
    }

    .contact-two__contact-list > li .content {
      flex: 1 1 auto;
      min-width: 0;
    }
  }
`;

export default ContactInfo;
