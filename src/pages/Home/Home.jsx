import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Counter from "./Counter";
import Services from "./Services";
import Products from "./Products";
import Choose from "./Choose";
import Clients from "./Clients";
import Testimonial from "./Testimonial";
import Blog from "./Blog";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Counter />
      <Services />
      <Products />
      <Choose />
      <Clients />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
