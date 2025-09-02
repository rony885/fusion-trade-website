import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Team Data
const teamMembers = [
  {
    id: 1,
    name: "Sophia Bennett",
    role: "CEO & Founder",
    image: "/assets/images/team/team-2-1.jpg",
    socials: [
      { icon: "icon-facebook", link: "#" },
      { icon: "icon-dribble", link: "#" },
      { icon: "icon-linkedin", link: "#" },
    ],
  },
  {
    id: 2,
    name: "Liam Johnson",
    role: "Operations Manager",
    image: "/assets/images/team/team-2-2.jpg",
    socials: [
      { icon: "icon-facebook", link: "#" },
      { icon: "icon-dribble", link: "#" },
      { icon: "icon-linkedin", link: "#" },
    ],
  },
  {
    id: 3,
    name: "Ethan Miller",
    role: "Lead Designer",
    image: "/assets/images/team/team-2-3.jpg",
    socials: [
      { icon: "icon-facebook", link: "#" },
      { icon: "icon-dribble", link: "#" },
      { icon: "icon-linkedin", link: "#" },
    ],
  },
  {
    id: 4,
    name: "Olivia Davis",
    role: "Marketing Head",
    image: "/assets/images/team/team-2-2.jpg",
    socials: [
      { icon: "icon-facebook", link: "#" },
      { icon: "icon-dribble", link: "#" },
      { icon: "icon-linkedin", link: "#" },
    ],
  },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button className="custom-arrow next" onClick={onClick}>
    <FaAngleRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev" onClick={onClick}>
    <FaAngleLeft />
  </button>
);

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendArrows: (arrows) => (
      <div className="custom-arrows-wrapper">{arrows}</div>
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Wrapper>
      <section className="team-two">
        <div
          className="team-two__bg-shape float-bob-y"
          style={{
            backgroundImage:
              "url('/assets/images/shapes/team-two-bg-shape.png')",
          }}
        ></div>
        <div className="team-two__shape-1"></div>
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div className="col-xl-5">
              <div className="team-two__left">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-1"></div>
                    <span className="section-title__tagline">Our Members</span>
                    <div className="section-title__tagline-shape-2"></div>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Meet Our Team. <span>Get to </span>
                    <br />
                    <span>Know the Talented</span>
                    Minds Behind Our Team
                  </h2>
                </div>
                <p className="team-two__text">
                  Our dedicated team combines expertise, <br />
                  creativity, and passion to deliver exceptional
                  <br />
                  results and ensure your satisfaction every step
                  <br />
                  of the way.
                </p>
              </div>
            </div>

            {/* Right Side - Slider */}
            <div className="col-xl-7">
              <div className="team-two__right">
                <Slider {...settings} className="team-two__carousel">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="px-3">
                      <div className="team-two__single h-100">
                        <div className="team-two__img-box h-100">
                          <div className="team-two__img h-100">
                            <img
                              src={member.image}
                              alt={member.name}
                              style={{
                                width: "100%",
                                height: "350px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="team-two__social">
                            {member.socials.map((social, i) => (
                              <a href={social.link} key={i}>
                                <span className={social.icon}></span>
                              </a>
                            ))}
                          </div>
                          <div className="team-two__title-box">
                            <h3>
                              <a href="team-details.html">{member.name}</a>
                            </h3>
                            <p>{member.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Arrows container under the slider */
  .custom-arrows-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 15px;
  }

  .custom-arrow {
    background: #fff;
    color: #f433a2;
    border: none;
    font-size: 20px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #f433a2;
      color: #fff;
    }
  }
`;

export default Team;
