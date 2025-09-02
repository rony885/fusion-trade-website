import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const testimonialData = [
  {
    id: 1,
    img: "/assets/images/testimonial/testimonial-2-1.jpg",
    name: "Md. Imran Hossain",
    role: "Chief Operations Officer",
    text: "Fusion Trade has been instrumental in streamlining our trading operations. Their platform's efficiency and reliability have significantly enhanced our trading strategies.",
    stars: 5,
  },
  {
    id: 2,
    img: "/assets/images/testimonial/testimonial-2-2.jpg",
    name: "Sumaiya Akter",
    role: "Director of Finance",
    text: "The integration of Fusion Trade's services into our financial operations has been seamless. Their team's professionalism and expertise are commendable.",
    stars: 5,
  },
  {
    id: 3,
    img: "/assets/images/testimonial/testimonial-2-3.jpg",
    name: "Innovative Tech Corp.",
    role: "Head of Trading Desk",
    text: "We've seen a marked improvement in our trading outcomes since partnering with Fusion Trade. Their platform offers the tools and support we need to succeed.",
    stars: 5,
  },
  {
    id: 4,
    img: "/assets/images/testimonial/testimonial-2-2.jpg",
    name: "Nusrat Jahan",
    role: "Portfolio Manager",
    text: "Fusion Trade's commitment to excellence is evident in every interaction. Their platform's capabilities have empowered us to make more informed trading decisions.",
    stars: 5,
  },
  {
    id: 5,
    img: "/assets/images/testimonial/testimonial-2-1.jpg",
    name: "Sakib Al Hasan",
    role: "Managing Director",
    text: "Working with Fusion Trade has been a game-changer for our operations. Their team's dedication and the platform's features have exceeded our expectations.",
    stars: 5,
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? "icon-pointed-star" : "icon-star"} />
    ));
  };

  return (
    <Wrapper>
      <section className="testimonial-two">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Testimonials</span>
            <h2 className="section-title__title">
              Customer Experiences <br /> That <span>Speak Volumes</span>
            </h2>
          </div>

          <Slider {...settings} className="testimonial-two__carousel">
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id}>
                <div className="testimonial-two__single">
                  <div className="testimonial-two__single-inner">
                    <div className="testimonial-two__star">
                      {renderStars(testimonial.stars)}
                    </div>
                    <p className="testimonial-two__text">{testimonial.text}</p>
                  </div>
                  <div className="testimonial-two__client-info">
                    <div className="testimonial-two__client-img">
                      <img src={testimonial.img} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-two__client-content">
                      <h4 className="testimonial-two__client-name">
                        <Link to="/testimonials">{testimonial.name}</Link>
                      </h4>
                      <p className="testimonial-two__sub-title">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .testimonial-two__single {
    height: 100%;
    min-height: 300px;
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    box-sizing: border-box;

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  .testimonial-two__single-inner {
    flex-grow: 1;
  }

  .testimonial-two__text {
    text-align: justify;
    margin: 10px 0 20px;
  }

  .testimonial-two__client-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .testimonial-two__client-img img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  .testimonial-two__client-content h4 {
    margin: 0;
    font-size: 16px;
  }

  .testimonial-two__client-content p {
    margin: 0;
    font-size: 14px;
    /* color: #777; */
  }

  @media (max-width: 768px) {
    .testimonial-two__single {
      max-width: 90%;
    }
  }
`;

export default Testimonial;
