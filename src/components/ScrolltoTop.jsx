import React from "react";
import { Link } from "react-router-dom";

const ScrolltoTop = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link onClick={handleScroll} className="scroll-to-target scroll-to-top">
      <span className="scroll-to-top__wrapper">
        <span className="scroll-to-top__inner"></span>
      </span>

      <span className="scroll-to-top__text">Go Back Top</span>
    </Link>
  );
};

export default ScrolltoTop;
