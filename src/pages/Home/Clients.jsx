import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientsData = [
  "UI/UX Design",
  "Product Design",
  "Web Development",
  "BRANDING",
  "Cyber Security",
  "Website design",
  "Digital Marketing",
  "UI/UX Design",
];

const Clients = () => {
  const sliderSettings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5, // number of visible items
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // continuous sliding
    cssEase: "linear", // smooth linear animation
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="sliding-text-three">
      <div className="sliding-text-three__wrap">
        <Slider {...sliderSettings}>
          {clientsData.map((item, index) => (
            <div key={index} className="sliding-text-three__item py-4">
              <h2 data-hover={item} className="sliding-text-three__title">
                {item}
              </h2>
              {/* <span className="icon-star"></span> */}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
