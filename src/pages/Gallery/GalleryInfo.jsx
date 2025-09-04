import React, { useState } from "react";
import styled from "styled-components";

const galleryImages = [
  "/assets/images/gallery/gallery-page-1-1.jpg",
  "/assets/images/gallery/gallery-page-1-2.jpg",
  "/assets/images/gallery/gallery-page-1-3.jpg",
  "/assets/images/gallery/gallery-page-1-4.jpg",
  "/assets/images/gallery/gallery-page-1-5.jpg",
  "/assets/images/gallery/gallery-page-1-6.jpg",
  "/assets/images/gallery/gallery-page-1-7.jpg",
  "/assets/images/gallery/gallery-page-1-9.jpg",
];

const GalleryInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openPopup = (index) => setCurrentIndex(index);
  const closePopup = () => setCurrentIndex(null);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Wrapper>
      <section className="gallery-page">
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape-1"></div>
              <span className="section-title__tagline">
                Fusion Trade Gallery
              </span>
              <div className="section-title__tagline-shape-2"></div>
            </div>
            <h2 className="section-title__title title-animation">
              Showcasing Our <span>Journey &amp; Excellence</span>
              <br />
              <span>Through Captivating</span> Photos &amp; Videos
            </h2>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((src, index) => (
              <div key={index} className="gallery-page__single">
                <div className="gallery-page__img">
                  <div className="gallery-page__img-box">
                    <img src={src} alt={`gallery-${index + 1}`} />
                  </div>
                  <div
                    className="gallery-page__icon"
                    onClick={() => openPopup(index)}
                  >
                    <span className="icon-plus fs-3"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popup Modal */}
        {currentIndex !== null && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <img src={galleryImages[currentIndex]} alt="popup" />
              <button className="popup-close" onClick={closePopup}>
                &times;
              </button>

              {/* Navigation buttons */}
              <button className="popup-prev" onClick={prevImage}>
                &#10094;
              </button>
              <button className="popup-next" onClick={nextImage}>
                &#10095;
              </button>
            </div>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media (max-width: 1024px) {
    .gallery-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    .gallery-grid {
      grid-template-columns: 1fr;
    }
  }
  .gallery-page__icon .icon-plus:hover {
    color: #ffd25d;
  }

  .gallery-page__img-box {
    width: 100%;
    height: 350px;
    overflow: hidden;
    border-radius: 8px;
  }

  .gallery-page__img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Popup styles */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .popup-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
  }

  .popup-content img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .popup-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 34px;
    cursor: pointer;
    color: #f439ae;
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  .popup-close:hover {
    background: #ffffff84;
    color: #f439ae;
  }

  .popup-prev,
  .popup-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.7);
    border: none;
    font-size: 40px;
    font-weight: bold;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 50%;
    color: #f439ae;
    transition: all 0.3s ease;
  }

  .popup-prev:hover,
  .popup-next:hover {
    background: #fff;
  }

  .popup-prev {
    left: -50px;
  }

  .popup-next {
    right: -50px;
  }

  @media (max-width: 768px) {
    .popup-prev {
      left: 10px;
    }
    .popup-next {
      right: 10px;
    }
  }
`;

export default GalleryInfo;
