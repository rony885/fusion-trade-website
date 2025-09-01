import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
// import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Mobilenav from "./components/Mobilenav";
import ScrolltoTop from "./components/ScrolltoTop";
import Top from "./components/Top";
import Error from "./pages/Error/Error";
import Service from "./pages/Services/Service";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Product from "./pages/Product/Product";
import BlogDetails from "./pages/BlogDetails/BlogDetails";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <div
        className={`custom-cursor ${menuOpen ? "custom-cursor locked" : ""}`}
      >
        {/* <Sidebar /> */}
        <Top />
        <div className="page-wrapper">
          <Header toggleMenu={toggleMenu} closeMenu={closeMenu} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/products" element={<Product />} />
            <Route path="/blog" element={<Blog />} />Z
            <Route path="/blog-details" element={<BlogDetails />} />Z
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
        <Mobilenav closeMenu={closeMenu} menuOpen={menuOpen} />
        <ScrolltoTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
