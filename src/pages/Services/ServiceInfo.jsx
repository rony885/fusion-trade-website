// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import serviceData from "../../serviceData.js";

// const Services = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     setServices(serviceData);
//   }, []);

//   return (
//     <Wrapper>
//       <section className="services-two">
//         <div className="container">
//           <div className="section-title text-center sec-title-animation animation-style1">
//             <div className="section-title__tagline-box">
//               <div className="section-title__tagline-shape-1"></div>
//               <span className="section-title__tagline">Our Services</span>
//               <div className="section-title__tagline-shape-2"></div>
//             </div>
//             <h2 className="section-title__title title-animation">
//               How We <span>Deliver Value</span>
//               <br />
//               <span>Through Reliable</span>&nbsp;B2B Services
//             </h2>
//           </div>

//           {/* Cards Grid */}
//           <div className="services-grid">
//             {services.map((service, index) => (
//               <div key={index} className="card">
//                 <div className="services-three__icon-and-title">
//                   <div className="services-three__icon">
//                     <img src={service.image} alt="Services Icon" />
//                   </div>
//                   <h3 className="services-three__title">
//                     <Link to="/products">{service.title}</Link>
//                   </h3>
//                 </div>
//                 <p className="services-three__text text-white mb-4">
//                   {service.text}
//                 </p>
//                 <Link to="/products" className="services-three__btn">
//                   Read More <span className="icon-right-arrow-1"></span>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .spanText {
//     font-size: 30px;
//     color: #ffd25d;
//     text-transform: capitalize;
//     font-family: var(--techguru-font-two);
//   }

//   /* Grid for cards */
//   .services-grid {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 25px;
//     margin-top: 40px;
//   }

//   .card {
//     /* height: 300px; */
//     width: 100%;
//     border-radius: 10px;
//     padding: 20px;
//     background-color: #0b192c;
//     border: 1px solid #c5c8cd34;

//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//     transition: transform 0.3s ease, box-shadow 0.3s ease;
//   }

//   .card:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
//   }

//   .services-three__icon-and-title {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-bottom: 15px;
//   }
//   .services-three__icon-and-title h3 {
//     font-size: 22px;
//   }

//   .services-three__icon img {
//     width: 80px;
//     height: 70px;
//     transition: transform 0.3s ease, filter 0.3s ease;
//     cursor: pointer;
//   }

//   .services-three__icon img:hover {
//     transform: scale(1.1);
//     filter: brightness(1.2);
//   }

//   /* Responsive */
//   @media (max-width: 1024px) {
//     .services-grid {
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }

//   @media (max-width: 600px) {
//     .services-grid {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

// export default Services;

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import serviceData from "../../serviceData.js";

// const Services = () => {
//   const [services, setServices] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setServices(serviceData);
//   }, []);

//   // ✅ Save category in localStorage and navigate
//   const handleServiceClick = (serviceTitle) => {
//     localStorage.setItem("activeCategory", serviceTitle);
//     navigate("/products");
//   };

//   return (
//     <Wrapper>
//       <section className="services-two">
//         <div className="container">
//           <div className="section-title text-center sec-title-animation animation-style1">
//             <div className="section-title__tagline-box">
//               <div className="section-title__tagline-shape-1"></div>
//               <span className="section-title__tagline">Our Services</span>
//               <div className="section-title__tagline-shape-2"></div>
//             </div>
//             <h2 className="section-title__title title-animation">
//               How We <span>Deliver Value</span>
//               <br />
//               <span>Through Reliable</span>&nbsp;B2B Services
//             </h2>
//           </div>

//           {/* Cards Grid */}
//           <div className="services-grid">
//             {services.map((service, index) => (
//               <div key={index} className="card">
//                 <div className="services-three__icon-and-title">
//                   <div
//                     className="services-three__icon"
//                     onClick={() => handleServiceClick(service.title)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <img src={service.image} alt="Services Icon" />
//                   </div>
//                   <h3
//                     className="services-three__title"
//                     onClick={() => handleServiceClick(service.title)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     {service.title}
//                   </h3>
//                 </div>
//                 <p className="services-three__text text-white mb-4">
//                   {service.text}
//                 </p>
//                 <button
//                   onClick={() => handleServiceClick(service.title)}
//                   className="services-three__btn"
//                 >
//                   Read More <span className="icon-right-arrow-1"></span>
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .spanText {
//     font-size: 30px;
//     color: #ffd25d;
//     text-transform: capitalize;
//     font-family: var(--techguru-font-two);
//   }

//   /* Grid for cards */
//   .services-grid {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 25px;
//     margin-top: 40px;
//   }

//   .card {
//     width: 100%;
//     border-radius: 10px;
//     padding: 20px;
//     background-color: #0b192c;
//     border: 1px solid #c5c8cd34;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//     transition: transform 0.3s ease, box-shadow 0.3s ease;
//   }

//   .card:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
//   }

//   .services-three__icon-and-title {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-bottom: 15px;
//   }
//   .services-three__icon-and-title h3 {
//     font-size: 22px;
//   }

//   .services-three__icon img {
//     width: 80px;
//     height: 70px;
//     transition: transform 0.3s ease, filter 0.3s ease;
//   }

//   .services-three__icon img:hover {
//     transform: scale(1.1);
//     filter: brightness(1.2);
//   }

//   .services-three__btn {
//     background: transparent;
//     border: none;
//     color: #ffd25d;
//     font-weight: 600;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     gap: 6px;
//     transition: color 0.3s ease;
//   }
//   .services-three__btn:hover {
//     color: #fff;
//   }

//   /* Responsive */
//   @media (max-width: 1024px) {
//     .services-grid {
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }

//   @media (max-width: 600px) {
//     .services-grid {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

// export default Services;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import serviceData from "../../serviceData.js";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(serviceData);
  }, []);

  return (
    <Wrapper>
      <section className="services-two">
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape-1"></div>
              <span className="section-title__tagline">Our Services</span>
              <div className="section-title__tagline-shape-2"></div>
            </div>
            <h2 className="section-title__title title-animation">
              How We <span>Deliver Value</span>
              <br />
              <span>Through Reliable</span>&nbsp;B2B Services
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="services-three__icon-and-title">
                  <div
                    className="services-three__icon"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={service.image} alt="Services Icon" />
                  </div>
                  <h3
                    to="/products"
                    className="services-three__title"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      localStorage.setItem(
                        "activeTabTemp",
                        service.id.toString()
                      )
                    }
                  >
                    {service.title}
                  </h3>
                </div>
                <p className="services-three__text text-white mb-4">
                  {service.text}
                </p>
                <Link
                  to="/products"
                  className="services-three__btn btn btn-warning"
                  onClick={() =>
                    localStorage.setItem("activeTabTemp", service.id.toString())
                  }
                >
                  Show All Product <span className="icon-right-arrow-1"></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .spanText {
    font-size: 30px;
    color: #ffd25d;
    text-transform: capitalize;
    font-family: var(--techguru-font-two);
  }

  /* Grid for cards */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-top: 40px;
  }

  .card {
    width: 100%;
    border-radius: 10px;
    padding: 20px;
    background-color: #0b192c;
    border: 1px solid #c5c8cd34;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  }

  .services-three__icon-and-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }
  .services-three__icon-and-title h3 {
    font-size: 22px;
  }

  .services-three__icon img {
    width: 80px;
    height: 70px;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  .services-three__icon img:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
  }

  .services-three__btn {
    background: transparent;
    border: none;
    color: #ffd25d;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.3s ease;
  }
  .services-three__btn:hover {
    color: #fff;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .services-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
