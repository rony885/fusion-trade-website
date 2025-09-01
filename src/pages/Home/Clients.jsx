// import React from "react";

// const Clients = () => {
//   return (
//     <section className="sliding-text-three">
//       <div className="sliding-text-three__wrap">
//         <ul className="sliding-text-three__list list-unstyled marquee_mode">
//           <li>
//             <h2 data-hover="UI/UX Design" className="sliding-text-three__title">
//               UI/UX Design
//             </h2>
//             <span className="icon-star"></span>
//           </li>
//           <li>
//             <h2
//               data-hover="Product Design"
//               className="sliding-text-three__title"
//             >
//               Product Design
//             </h2>
//             <span className="icon-star"></span>
//           </li>
//           <li>
//             <h2
//               data-hover="Web Development"
//               className="sliding-text-three__title"
//             >
//               Web Development
//             </h2>
//             <span className="icon-star"></span>
//           </li>
//           <li>
//             <h2 data-hover="BRANDING" className="sliding-text-three__title">
//               BRANDING
//             </h2>
//             <span className="icon-star"></span>
//           </li>
//           <li>
//             <h2
//               data-hover="Cyber Security"
//               className="sliding-text-three__title"
//             >
//               Cyber Security
//             </h2>
//             <span className="icon-star"></span>
//           </li>
//           <li>
//             <h2
//               data-hover="Website design"
//               className="sliding-text-three__title"
//             >
//               Website design
//             </h2>
//             <span className="icon-star"></span>
//           </li>
//           <li>
//             <h2
//               data-hover="Digital Marketing"
//               className="sliding-text-three__title"
//             >
//               Digital Marketing
//             </h2>
//             <span className="icon-star"></span>
//           </li>
//           <li>
//             <h2 data-hover="UI/UX Design" className="sliding-text-three__title">
//               UI/UX Design
//             </h2>
//             <span className="icon-star"></span>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Clients;

// import React from "react";

// const clientsData = [
//   "UI/UX Design",
//   "Product Design",
//   "Web Development",
//   "BRANDING",
//   "Cyber Security",
//   "Website design",
//   "Digital Marketing",
//   "UI/UX Design",
// ];

// const Clients = () => {
//   return (
//     <section className="sliding-text-three">
//       <div className="sliding-text-three__wrap">
//         <ul className="sliding-text-three__list list-unstyled marquee_mode">
//           {clientsData.map((item, index) => (
//             <li key={index}>
//               <h2 data-hover={item} className="sliding-text-three__title">
//                 {item}
//               </h2>
//               <span className="icon-star"></span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Clients;

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
