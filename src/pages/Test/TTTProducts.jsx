import React from "react";
import { Link } from "react-router-dom";

const ProductInfo = () => {
  return (
    <section className="product">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-12">
            <div className="product__items">
              <div className="row">
                <div className="col-xl-12">
                  <div className="product__showing-result">
                    <div className="product__showing-text-box">
                      <p className="product__showing-text">
                        Showing 1–12/14 of 14 results
                      </p>
                    </div>
                    <div className="product__showing-sort">
                      <div className="select-box">
                        <select className="wide">
                          <option data-display="Sort by popular">
                            Sort by popular
                          </option>
                          <option value="1">Sort by popular</option>
                          <option value="2">Sort by Price</option>
                          <option value="3">Sort by Ratings</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product__all">
                <div className="product__all-tab">
                  <div className="product__all-tab-button">
                    <ul className="tabs-button-box clearfix">
                      <li
                        data-tab="#grid"
                        className="tab-btn-item active-btn-item"
                      >
                        <div className="product__all-tab-button-icon one">
                          <i className="fa fa-solid fa-bars"></i>
                        </div>
                      </li>
                      <li data-tab="#list" className="tab-btn-item">
                        <div className="product__all-tab-button-icon">
                          <i className="fa fa-solid fa-list-ul"></i>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* <!--Start Tabs Content Box--> */}
                  <div className="tabs-content-box">
                    {/* <!--Start Tab--> */}
                    <div
                      className="tab-content-box-item tab-content-box-item-active"
                      id="grid"
                    >
                      <div className="product__all-tab-content-box-item">
                        <div className="product__all-tab-single">
                          <div className="row">
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                              <div className="single-product-style1">
                                <div className="single-product-style1__img">
                                  <img
                                    src="assets/images/shop/shop-product-1-1.png"
                                    alt=""
                                  />
                                  <img
                                    src="assets/images/shop/shop-product-1-1.png"
                                    alt=""
                                  />
                                  <ul className="single-product-style1__overlay">
                                    <li>
                                      <p>New</p>
                                    </li>
                                  </ul>
                                  <ul className="single-product-style1__info">
                                    <li>
                                      <Link to="#" title="Add to Wishlist">
                                        <i className="fa fa-regular fa-heart"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Add to cart">
                                        <i className="fa fa-solid fa-cart-plus"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Quick View">
                                        <i className="fa fa-regular fa-eye"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Compare">
                                        <i className="fa fa-solid fa-repeat"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="single-product-style1__content">
                                  <div className="single-product-style1__content-left">
                                    <h4>
                                      <Link to="product-details.html">
                                        rendering metallic ai
                                      </Link>
                                    </h4>
                                    <p>$33.00</p>
                                  </div>
                                  <div className="single-product-style1__content-right">
                                    <div className="single-product-style1__review">
                                      <i className="fa fa-star"></i>
                                      <p>4.9</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single End--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                              <div className="single-product-style1">
                                <div className="single-product-style1__img">
                                  <img
                                    src="assets/images/shop/shop-product-1-2.png"
                                    alt=""
                                  />
                                  <img
                                    src="assets/images/shop/shop-product-1-2.png"
                                    alt=""
                                  />
                                  <ul className="single-product-style1__info">
                                    <li>
                                      <Link to="#" title="Add to Wishlist">
                                        <i className="fa fa-regular fa-heart"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Add to cart">
                                        <i className="fa fa-solid fa-cart-plus"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Quick View">
                                        <i className="fa fa-regular fa-eye"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Compare">
                                        <i className="fa fa-solid fa-repeat"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="single-product-style1__content">
                                  <div className="single-product-style1__content-left">
                                    <h4>
                                      <Link to="product-details.html">
                                        3d render robot
                                      </Link>
                                    </h4>
                                    <p>$50.00</p>
                                  </div>
                                  <div className="single-product-style1__content-right">
                                    <div className="single-product-style1__review">
                                      <i className="fa fa-star"></i>
                                      <p>5.0</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single End--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                              <div className="single-product-style1">
                                <div className="single-product-style1__img">
                                  <img
                                    src="assets/images/shop/shop-product-1-3.png"
                                    alt=""
                                  />
                                  <img
                                    src="assets/images/shop/shop-product-1-3.png"
                                    alt=""
                                  />
                                  <ul className="single-product-style1__overlay">
                                    <li>
                                      <p>5% Off</p>
                                    </li>
                                  </ul>
                                  <ul className="single-product-style1__info">
                                    <li>
                                      <Link to="#" title="Add to Wishlist">
                                        <i className="fa fa-regular fa-heart"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Add to cart">
                                        <i className="fa fa-solid fa-cart-plus"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Quick View">
                                        <i className="fa fa-regular fa-eye"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Compare">
                                        <i className="fa fa-solid fa-repeat"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="single-product-style1__content">
                                  <div className="single-product-style1__content-left">
                                    <h4>
                                      <Link to="product-details.html">
                                        motorcycle helmet
                                      </Link>
                                    </h4>
                                    <p>
                                      <del>$33.00</del> $28.00
                                    </p>
                                  </div>
                                  <div className="single-product-style1__content-right">
                                    <div className="single-product-style1__review">
                                      <i className="fa fa-star"></i>
                                      <p>4.5</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single End--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                              <div className="single-product-style1">
                                <div className="single-product-style1__img">
                                  <img
                                    src="assets/images/shop/shop-product-1-4.png"
                                    alt=""
                                  />
                                  <img
                                    src="assets/images/shop/shop-product-1-4.png"
                                    alt=""
                                  />
                                  <ul className="single-product-style1__info">
                                    <li>
                                      <Link to="#" title="Add to Wishlist">
                                        <i className="fa fa-regular fa-heart"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Add to cart">
                                        <i className="fa fa-solid fa-cart-plus"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Quick View">
                                        <i className="fa fa-regular fa-eye"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Compare">
                                        <i className="fa fa-solid fa-repeat"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="single-product-style1__content">
                                  <div className="single-product-style1__content-left">
                                    <h4>
                                      <Link to="product-details.html">
                                        robot gesturing
                                      </Link>
                                    </h4>
                                    <p>$40.00</p>
                                  </div>
                                  <div className="single-product-style1__content-right">
                                    <div className="single-product-style1__review">
                                      <i className="fa fa-star"></i>
                                      <p>4.8</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single End--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                              <div className="single-product-style1">
                                <div className="single-product-style1__img">
                                  <img
                                    src="assets/images/shop/shop-product-1-5.png"
                                    alt=""
                                  />
                                  <img
                                    src="assets/images/shop/shop-product-1-5.png"
                                    alt=""
                                  />
                                  <ul className="single-product-style1__overlay">
                                    <li>
                                      <p>5% Off</p>
                                    </li>
                                  </ul>
                                  <ul className="single-product-style1__info">
                                    <li>
                                      <Link to="#" title="Add to Wishlist">
                                        <i className="fa fa-regular fa-heart"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Add to cart">
                                        <i className="fa fa-solid fa-cart-plus"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Quick View">
                                        <i className="fa fa-regular fa-eye"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Compare">
                                        <i className="fa fa-solid fa-repeat"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="single-product-style1__content">
                                  <div className="single-product-style1__content-left">
                                    <h4>
                                      <Link to="product-details.html">
                                        ski helmet with visor
                                      </Link>
                                    </h4>
                                    <p>
                                      <del>$25.00</del>$20.00
                                    </p>
                                  </div>
                                  <div className="single-product-style1__content-right">
                                    <div className="single-product-style1__review">
                                      <i className="fa fa-star"></i>
                                      <p>4.9</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single End--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                              <div className="single-product-style1">
                                <div className="single-product-style1__img">
                                  <img
                                    src="assets/images/shop/shop-product-1-6.png"
                                    alt=""
                                  />
                                  <img
                                    src="assets/images/shop/shop-product-1-6.png"
                                    alt=""
                                  />
                                  <ul className="single-product-style1__info">
                                    <li>
                                      <Link to="#" title="Add to Wishlist">
                                        <i className="fa fa-regular fa-heart"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Add to cart">
                                        <i className="fa fa-solid fa-cart-plus"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Quick View">
                                        <i className="fa fa-regular fa-eye"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Compare">
                                        <i className="fa fa-solid fa-repeat"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="single-product-style1__content">
                                  <div className="single-product-style1__content-left">
                                    <h4>
                                      <Link to="product-details.html">
                                        snowboard boot
                                      </Link>
                                    </h4>
                                    <p>$35.00</p>
                                  </div>
                                  <div className="single-product-style1__content-right">
                                    <div className="single-product-style1__review">
                                      <i className="fa fa-star"></i>
                                      <p>4.7</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single End--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                              <div className="single-product-style1">
                                <div className="single-product-style1__img">
                                  <img
                                    src="assets/images/shop/shop-product-1-1.png"
                                    alt=""
                                  />
                                  <img
                                    src="assets/images/shop/shop-product-1-1.png"
                                    alt=""
                                  />
                                  <ul className="single-product-style1__overlay">
                                    <li>
                                      <p>New</p>
                                    </li>
                                  </ul>
                                  <ul className="single-product-style1__info">
                                    <li>
                                      <Link to="#" title="Add to Wishlist">
                                        <i className="fa fa-regular fa-heart"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Add to cart">
                                        <i className="fa fa-solid fa-cart-plus"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Quick View">
                                        <i className="fa fa-regular fa-eye"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Compare">
                                        <i className="fa fa-solid fa-repeat"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="single-product-style1__content">
                                  <div className="single-product-style1__content-left">
                                    <h4>
                                      <Link to="product-details.html">
                                        rendering metallic ai
                                      </Link>
                                    </h4>
                                    <p>$33.00</p>
                                  </div>
                                  <div className="single-product-style1__content-right">
                                    <div className="single-product-style1__review">
                                      <i className="fa fa-star"></i>
                                      <p>4.9</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single End--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                              <div className="single-product-style1">
                                <div className="single-product-style1__img">
                                  <img
                                    src="assets/images/shop/shop-product-1-2.png"
                                    alt=""
                                  />
                                  <img
                                    src="assets/images/shop/shop-product-1-2.png"
                                    alt=""
                                  />
                                  <ul className="single-product-style1__info">
                                    <li>
                                      <Link to="#" title="Add to Wishlist">
                                        <i className="fa fa-regular fa-heart"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Add to cart">
                                        <i className="fa fa-solid fa-cart-plus"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Quick View">
                                        <i className="fa fa-regular fa-eye"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Compare">
                                        <i className="fa fa-solid fa-repeat"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="single-product-style1__content">
                                  <div className="single-product-style1__content-left">
                                    <h4>
                                      <Link to="product-details.html">
                                        3d render robot
                                      </Link>
                                    </h4>
                                    <p>$50.00</p>
                                  </div>
                                  <div className="single-product-style1__content-right">
                                    <div className="single-product-style1__review">
                                      <i className="fa fa-star"></i>
                                      <p>5.0</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single End--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                              <div className="single-product-style1">
                                <div className="single-product-style1__img">
                                  <img
                                    src="assets/images/shop/shop-product-1-3.png"
                                    alt=""
                                  />
                                  <img
                                    src="assets/images/shop/shop-product-1-3.png"
                                    alt=""
                                  />
                                  <ul className="single-product-style1__overlay">
                                    <li>
                                      <p>5% Off</p>
                                    </li>
                                  </ul>
                                  <ul className="single-product-style1__info">
                                    <li>
                                      <Link to="#" title="Add to Wishlist">
                                        <i className="fa fa-regular fa-heart"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Add to cart">
                                        <i className="fa fa-solid fa-cart-plus"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Quick View">
                                        <i className="fa fa-regular fa-eye"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Compare">
                                        <i className="fa fa-solid fa-repeat"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="single-product-style1__content">
                                  <div className="single-product-style1__content-left">
                                    <h4>
                                      <Link to="product-details.html">
                                        motorcycle helmet
                                      </Link>
                                    </h4>
                                    <p>
                                      <del>$33.00</del> $28.00
                                    </p>
                                  </div>
                                  <div className="single-product-style1__content-right">
                                    <div className="single-product-style1__review">
                                      <i className="fa fa-star"></i>
                                      <p>4.5</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single End--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                              <div className="single-product-style1">
                                <div className="single-product-style1__img">
                                  <img
                                    src="assets/images/shop/shop-product-1-4.png"
                                    alt=""
                                  />
                                  <img
                                    src="assets/images/shop/shop-product-1-4.png"
                                    alt=""
                                  />
                                  <ul className="single-product-style1__info">
                                    <li>
                                      <Link to="#" title="Add to Wishlist">
                                        <i className="fa fa-regular fa-heart"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Add to cart">
                                        <i className="fa fa-solid fa-cart-plus"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Quick View">
                                        <i className="fa fa-regular fa-eye"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Compare">
                                        <i className="fa fa-solid fa-repeat"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="single-product-style1__content">
                                  <div className="single-product-style1__content-left">
                                    <h4>
                                      <Link to="product-details.html">
                                        robot gesturing
                                      </Link>
                                    </h4>
                                    <p>$40.00</p>
                                  </div>
                                  <div className="single-product-style1__content-right">
                                    <div className="single-product-style1__review">
                                      <i className="fa fa-star"></i>
                                      <p>4.8</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single End--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                              <div className="single-product-style1">
                                <div className="single-product-style1__img">
                                  <img
                                    src="assets/images/shop/shop-product-1-5.png"
                                    alt=""
                                  />
                                  <img
                                    src="assets/images/shop/shop-product-1-5.png"
                                    alt=""
                                  />
                                  <ul className="single-product-style1__overlay">
                                    <li>
                                      <p>5% Off</p>
                                    </li>
                                  </ul>
                                  <ul className="single-product-style1__info">
                                    <li>
                                      <Link to="#" title="Add to Wishlist">
                                        <i className="fa fa-regular fa-heart"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Add to cart">
                                        <i className="fa fa-solid fa-cart-plus"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Quick View">
                                        <i className="fa fa-regular fa-eye"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Compare">
                                        <i className="fa fa-solid fa-repeat"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="single-product-style1__content">
                                  <div className="single-product-style1__content-left">
                                    <h4>
                                      <Link to="product-details.html">
                                        ski helmet with visor
                                      </Link>
                                    </h4>
                                    <p>
                                      <del>$25.00</del>$20.00
                                    </p>
                                  </div>
                                  <div className="single-product-style1__content-right">
                                    <div className="single-product-style1__review">
                                      <i className="fa fa-star"></i>
                                      <p>4.9</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single End--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                              <div className="single-product-style1">
                                <div className="single-product-style1__img">
                                  <img
                                    src="assets/images/shop/shop-product-1-6.png"
                                    alt=""
                                  />
                                  <img
                                    src="assets/images/shop/shop-product-1-6.png"
                                    alt=""
                                  />
                                  <ul className="single-product-style1__info">
                                    <li>
                                      <Link to="#" title="Add to Wishlist">
                                        <i className="fa fa-regular fa-heart"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Add to cart">
                                        <i className="fa fa-solid fa-cart-plus"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Quick View">
                                        <i className="fa fa-regular fa-eye"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Compare">
                                        <i className="fa fa-solid fa-repeat"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="single-product-style1__content">
                                  <div className="single-product-style1__content-left">
                                    <h4>
                                      <Link to="product-details.html">
                                        snowboard boot
                                      </Link>
                                    </h4>
                                    <p>$35.00</p>
                                  </div>
                                  <div className="single-product-style1__content-right">
                                    <div className="single-product-style1__review">
                                      <i className="fa fa-star"></i>
                                      <p>4.7</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single End--> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--End Tab--> */}
                    {/* <!--Start Tab--> */}
                    <div className="tab-content-box-item" id="list">
                      <div className="product__all-tab-content-box-item">
                        <div className="product__all-tab-single">
                          <div className="row">
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-6 col-lg-6">
                              <div className="single-product-style2">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__img">
                                      <img
                                        src="assets/images/shop/shop-product-2-1.png"
                                        alt=""
                                      />
                                      <img
                                        src="assets/images/shop/shop-product-2-1.png"
                                        alt=""
                                      />
                                      <ul className="single-product-style1__overlay">
                                        <li>
                                          <p>New</p>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__content">
                                      <div className="single-product-style2__review">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </div>
                                      <div className="single-product-style2__text">
                                        <h4>
                                          <Link to="product-details.html">
                                            rendering metallic ai
                                          </Link>
                                        </h4>
                                        <p>$33.00</p>
                                      </div>
                                      <ul className="single-product-style2__info">
                                        <li>
                                          <Link to="#" title="Add to Wishlist">
                                            <i className="fa fa-regular fa-heart"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Add to cart">
                                            <i className="fa fa-solid fa-cart-plus"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Quick View">
                                            <i className="fa fa-regular fa-eye"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Compare">
                                            <i className="fa fa-solid fa-repeat"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single Start--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-6 col-lg-6">
                              <div className="single-product-style2">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__img">
                                      <img
                                        src="assets/images/shop/shop-product-2-2.png"
                                        alt=""
                                      />
                                      <img
                                        src="assets/images/shop/shop-product-2-2.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__content">
                                      <div className="single-product-style2__review">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </div>
                                      <div className="single-product-style2__text">
                                        <h4>
                                          <Link to="product-details.html">
                                            3d render robot
                                          </Link>
                                        </h4>
                                        <p>$50.00</p>
                                      </div>
                                      <ul className="single-product-style2__info">
                                        <li>
                                          <Link to="#" title="Add to Wishlist">
                                            <i className="fa fa-regular fa-heart"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Add to cart">
                                            <i className="fa fa-solid fa-cart-plus"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Quick View">
                                            <i className="fa fa-regular fa-eye"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Compare">
                                            <i className="fa fa-solid fa-repeat"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single Start--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-6 col-lg-6">
                              <div className="single-product-style2">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__img">
                                      <img
                                        src="assets/images/shop/shop-product-2-3.png"
                                        alt=""
                                      />
                                      <img
                                        src="assets/images/shop/shop-product-2-3.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__content">
                                      <div className="single-product-style2__review">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </div>
                                      <div className="single-product-style2__text">
                                        <h4>
                                          <Link to="product-details.html">
                                            motorcycle helmet
                                          </Link>
                                        </h4>
                                        <p>$40.00</p>
                                      </div>
                                      <ul className="single-product-style2__info">
                                        <li>
                                          <Link to="#" title="Add to Wishlist">
                                            <i className="fa fa-regular fa-heart"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Add to cart">
                                            <i className="fa fa-solid fa-cart-plus"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Quick View">
                                            <i className="fa fa-regular fa-eye"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Compare">
                                            <i className="fa fa-solid fa-repeat"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single Start--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-6 col-lg-6">
                              <div className="single-product-style2">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__img">
                                      <img
                                        src="assets/images/shop/shop-product-2-4.png"
                                        alt=""
                                      />
                                      <img
                                        src="assets/images/shop/shop-product-2-4.png"
                                        alt=""
                                      />
                                    </div>
                                    <ul className="single-product-style1__overlay">
                                      <li>
                                        <p>5% Off</p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__content">
                                      <div className="single-product-style2__review">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </div>
                                      <div className="single-product-style2__text">
                                        <h4>
                                          <Link to="product-details.html">
                                            robot gesturing
                                          </Link>
                                        </h4>
                                        <p>
                                          <del>$33.00</del>$28.00
                                        </p>
                                      </div>
                                      <ul className="single-product-style2__info">
                                        <li>
                                          <Link to="#" title="Add to Wishlist">
                                            <i className="fa fa-regular fa-heart"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Add to cart">
                                            <i className="fa fa-solid fa-cart-plus"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Quick View">
                                            <i className="fa fa-regular fa-eye"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Compare">
                                            <i className="fa fa-solid fa-repeat"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single Start--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-6 col-lg-6">
                              <div className="single-product-style2">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__img">
                                      <img
                                        src="assets/images/shop/shop-product-2-5.png"
                                        alt=""
                                      />
                                      <img
                                        src="assets/images/shop/shop-product-2-5.png"
                                        alt=""
                                      />
                                    </div>
                                    <ul className="single-product-style1__overlay">
                                      <li>
                                        <p>5% Off</p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__content">
                                      <div className="single-product-style2__review">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </div>
                                      <div className="single-product-style2__text">
                                        <h4>
                                          <Link to="product-details.html">
                                            ski helmet with visor
                                          </Link>
                                        </h4>
                                        <p>
                                          <del>$25.00</del>$20.00
                                        </p>
                                      </div>
                                      <ul className="single-product-style2__info">
                                        <li>
                                          <Link to="#" title="Add to Wishlist">
                                            <i className="fa fa-regular fa-heart"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Add to cart">
                                            <i className="fa fa-solid fa-cart-plus"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Quick View">
                                            <i className="fa fa-regular fa-eye"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Compare">
                                            <i className="fa fa-solid fa-repeat"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single Start--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-6 col-lg-6">
                              <div className="single-product-style2">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__img">
                                      <img
                                        src="assets/images/shop/shop-product-2-6.png"
                                        alt=""
                                      />
                                      <img
                                        src="assets/images/shop/shop-product-2-6.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__content">
                                      <div className="single-product-style2__review">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </div>
                                      <div className="single-product-style2__text">
                                        <h4>
                                          <Link to="product-details.html">
                                            snowboard boot
                                          </Link>
                                        </h4>
                                        <p>$35.00</p>
                                      </div>
                                      <ul className="single-product-style2__info">
                                        <li>
                                          <Link to="#" title="Add to Wishlist">
                                            <i className="fa fa-regular fa-heart"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Add to cart">
                                            <i className="fa fa-solid fa-cart-plus"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Quick View">
                                            <i className="fa fa-regular fa-eye"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Compare">
                                            <i className="fa fa-solid fa-repeat"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single Start--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-6 col-lg-6">
                              <div className="single-product-style2">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__img">
                                      <img
                                        src="assets/images/shop/shop-product-2-1.png"
                                        alt=""
                                      />
                                      <img
                                        src="assets/images/shop/shop-product-2-1.png"
                                        alt=""
                                      />
                                      <ul className="single-product-style1__overlay">
                                        <li>
                                          <p>New</p>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__content">
                                      <div className="single-product-style2__review">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </div>
                                      <div className="single-product-style2__text">
                                        <h4>
                                          <Link to="product-details.html">
                                            rendering metallic ai
                                          </Link>
                                        </h4>
                                        <p>$33.00</p>
                                      </div>
                                      <ul className="single-product-style2__info">
                                        <li>
                                          <Link to="#" title="Add to Wishlist">
                                            <i className="fa fa-regular fa-heart"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Add to cart">
                                            <i className="fa fa-solid fa-cart-plus"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Quick View">
                                            <i className="fa fa-regular fa-eye"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Compare">
                                            <i className="fa fa-solid fa-repeat"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single Start--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-6 col-lg-6">
                              <div className="single-product-style2">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__img">
                                      <img
                                        src="assets/images/shop/shop-product-2-2.png"
                                        alt=""
                                      />
                                      <img
                                        src="assets/images/shop/shop-product-2-2.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__content">
                                      <div className="single-product-style2__review">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </div>
                                      <div className="single-product-style2__text">
                                        <h4>
                                          <Link to="product-details.html">
                                            3d render robot
                                          </Link>
                                        </h4>
                                        <p>$50.00</p>
                                      </div>
                                      <ul className="single-product-style2__info">
                                        <li>
                                          <Link to="#" title="Add to Wishlist">
                                            <i className="fa fa-regular fa-heart"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Add to cart">
                                            <i className="fa fa-solid fa-cart-plus"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Quick View">
                                            <i className="fa fa-regular fa-eye"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Compare">
                                            <i className="fa fa-solid fa-repeat"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single Start--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-6 col-lg-6">
                              <div className="single-product-style2">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__img">
                                      <img
                                        src="assets/images/shop/shop-product-2-3.png"
                                        alt=""
                                      />
                                      <img
                                        src="assets/images/shop/shop-product-2-3.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__content">
                                      <div className="single-product-style2__review">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </div>
                                      <div className="single-product-style2__text">
                                        <h4>
                                          <Link to="product-details.html">
                                            motorcycle helmet
                                          </Link>
                                        </h4>
                                        <p>$40.00</p>
                                      </div>
                                      <ul className="single-product-style2__info">
                                        <li>
                                          <Link to="#" title="Add to Wishlist">
                                            <i className="fa fa-regular fa-heart"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Add to cart">
                                            <i className="fa fa-solid fa-cart-plus"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Quick View">
                                            <i className="fa fa-regular fa-eye"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Compare">
                                            <i className="fa fa-solid fa-repeat"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single Start--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-6 col-lg-6">
                              <div className="single-product-style2">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__img">
                                      <img
                                        src="assets/images/shop/shop-product-2-4.png"
                                        alt=""
                                      />
                                      <img
                                        src="assets/images/shop/shop-product-2-4.png"
                                        alt=""
                                      />
                                    </div>
                                    <ul className="single-product-style1__overlay">
                                      <li>
                                        <p>5% Off</p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__content">
                                      <div className="single-product-style2__review">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </div>
                                      <div className="single-product-style2__text">
                                        <h4>
                                          <Link to="product-details.html">
                                            robot gesturing
                                          </Link>
                                        </h4>
                                        <p>
                                          <del>$33.00</del>$28.00
                                        </p>
                                      </div>
                                      <ul className="single-product-style2__info">
                                        <li>
                                          <Link to="#" title="Add to Wishlist">
                                            <i className="fa fa-regular fa-heart"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Add to cart">
                                            <i className="fa fa-solid fa-cart-plus"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Quick View">
                                            <i className="fa fa-regular fa-eye"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Compare">
                                            <i className="fa fa-solid fa-repeat"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single Start--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-6 col-lg-6">
                              <div className="single-product-style2">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__img">
                                      <img
                                        src="assets/images/shop/shop-product-2-5.png"
                                        alt=""
                                      />
                                      <img
                                        src="assets/images/shop/shop-product-2-5.png"
                                        alt=""
                                      />
                                    </div>
                                    <ul className="single-product-style1__overlay">
                                      <li>
                                        <p>5% Off</p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__content">
                                      <div className="single-product-style2__review">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </div>
                                      <div className="single-product-style2__text">
                                        <h4>
                                          <Link to="product-details.html">
                                            ski helmet with visor
                                          </Link>
                                        </h4>
                                        <p>
                                          <del>$25.00</del>$20.00
                                        </p>
                                      </div>
                                      <ul className="single-product-style2__info">
                                        <li>
                                          <Link to="#" title="Add to Wishlist">
                                            <i className="fa fa-regular fa-heart"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Add to cart">
                                            <i className="fa fa-solid fa-cart-plus"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Quick View">
                                            <i className="fa fa-regular fa-eye"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Compare">
                                            <i className="fa fa-solid fa-repeat"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single Start--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-6 col-lg-6">
                              <div className="single-product-style2">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__img">
                                      <img
                                        src="assets/images/shop/shop-product-2-6.png"
                                        alt=""
                                      />
                                      <img
                                        src="assets/images/shop/shop-product-2-6.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__content">
                                      <div className="single-product-style2__review">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </div>
                                      <div className="single-product-style2__text">
                                        <h4>
                                          <Link to="product-details.html">
                                            snowboard boot
                                          </Link>
                                        </h4>
                                        <p>$35.00</p>
                                      </div>
                                      <ul className="single-product-style2__info">
                                        <li>
                                          <Link to="#" title="Add to Wishlist">
                                            <i className="fa fa-regular fa-heart"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Add to cart">
                                            <i className="fa fa-solid fa-cart-plus"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Quick View">
                                            <i className="fa fa-regular fa-eye"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Compare">
                                            <i className="fa fa-solid fa-repeat"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single Start--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-6 col-lg-6">
                              <div className="single-product-style2">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__img">
                                      <img
                                        src="assets/images/shop/shop-product-2-1.png"
                                        alt=""
                                      />
                                      <img
                                        src="assets/images/shop/shop-product-2-1.png"
                                        alt=""
                                      />
                                    </div>
                                    <ul className="single-product-style1__overlay">
                                      <li>
                                        <p>5% Off</p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__content">
                                      <div className="single-product-style2__review">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </div>
                                      <div className="single-product-style2__text">
                                        <h4>
                                          <Link to="product-details.html">
                                            rendering metallic ai
                                          </Link>
                                        </h4>
                                        <p>
                                          <del>$25.00</del>$20.00
                                        </p>
                                      </div>
                                      <ul className="single-product-style2__info">
                                        <li>
                                          <Link to="#" title="Add to Wishlist">
                                            <i className="fa fa-regular fa-heart"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Add to cart">
                                            <i className="fa fa-solid fa-cart-plus"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Quick View">
                                            <i className="fa fa-regular fa-eye"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Compare">
                                            <i className="fa fa-solid fa-repeat"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single Start--> */}
                            {/* <!--Product All Single Start--> */}
                            <div className="col-xl-6 col-lg-6">
                              <div className="single-product-style2">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__img">
                                      <img
                                        src="assets/images/shop/shop-product-2-2.png"
                                        alt=""
                                      />
                                      <img
                                        src="assets/images/shop/shop-product-2-2.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="single-product-style2__content">
                                      <div className="single-product-style2__review">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </div>
                                      <div className="single-product-style2__text">
                                        <h4>
                                          <Link to="product-details.html">
                                            3d render robot
                                          </Link>
                                        </h4>
                                        <p>$35.00</p>
                                      </div>
                                      <ul className="single-product-style2__info">
                                        <li>
                                          <Link to="#" title="Add to Wishlist">
                                            <i className="fa fa-regular fa-heart"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Add to cart">
                                            <i className="fa fa-solid fa-cart-plus"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Quick View">
                                            <i className="fa fa-regular fa-eye"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title="Compare">
                                            <i className="fa fa-solid fa-repeat"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--Product All Single Start--> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--End Tab--> */}
                  </div>
                  {/* <!--End Tabs Content Box--> */}
                </div>
                <ul className="styled-pagination text-center clearfix list-unstyled">
                  <li className="arrow prev active">
                    <Link to="#">
                      <span className="icon-left-arrow"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">1</Link>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li className="arrow next">
                    <Link to="#">
                      <span className="icon-right-arrow"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-12">
            <div className="product__sidebar">
              <div className="shop-search product__sidebar-single">
                <form action="#">
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="product__price-ranger product__sidebar-single">
                <h3 className="product__sidebar-title">Price</h3>
                <div className="price-ranger">
                  <div id="slider-range"></div>
                  <div className="ranger-min-max-block">
                    <input type="text" readonly className="min" />
                    <span>-</span>
                    <input type="text" readonly className="max" />
                    <input type="submit" value="Filter" />
                  </div>
                </div>
              </div>

              <div className="shop-category product__sidebar-single">
                <h3 className="product__sidebar-title">Categories</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#">A Tradition of Healing</Link>
                  </li>
                  <li className="active">
                    <Link to="#">Compassionate Care</Link>
                  </li>
                  <li>
                    <Link to="#">Caring for You, Always</Link>
                  </li>
                  <li>
                    <Link to="#">Where Health Matters</Link>
                  </li>
                  <li>
                    <Link to="#">Environtment Recyle</Link>
                  </li>
                </ul>
              </div>

              <div className="shop-product-recent-products product__sidebar-single">
                <h3 className="product__sidebar-title">Recent Products</h3>
                <ul className="clearfix list-unstyled">
                  <li>
                    <div className="img">
                      <img
                        src="assets/images/shop/product-thumb-1.png"
                        alt="Product"
                      />
                      <Link to="#">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="title">
                        <h5>
                          <Link to="#">metallic ai</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <p>$33.00</p>
                      </div>
                      <div className="review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star color"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img">
                      <img
                        src="assets/images/shop/product-thumb-2.png"
                        alt="Product"
                      />
                      <Link to="#">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="title">
                        <h5>
                          <Link to="#">3d render robot</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <p>$39.00</p>
                      </div>
                      <div className="review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star color"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img">
                      <img
                        src="assets/images/shop/product-thumb-3.png"
                        alt="Product"
                      />
                      <Link to="#">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="title">
                        <h5>
                          <Link to="#">motorcycle helmet</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <p>$54.00</p>
                      </div>
                      <div className="review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star color"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img">
                      <img
                        src="assets/images/shop/product-thumb-4.png"
                        alt="Product"
                      />
                      <Link to="#">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="title">
                        <h5>
                          <Link to="#">robot gesturing</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <p>$44.00</p>
                      </div>
                      <div className="review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star color"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="shop-product-tags product__sidebar-single">
                <h3 className="product__sidebar-title">Product Tags</h3>
                <div className="shop-product__tags-list">
                  <Link to="#">Development</Link>
                  <Link to="#">Innovation</Link>
                  <Link to="#">Analytics</Link>
                  <Link to="#">Marketing</Link>
                  <Link to="#">Innovation</Link>
                  <Link to="#">Technology</Link>
                </div>
              </div>

              {/* <!--Start Products Style1 Single Sidear --> */}
              <div className="shop-product-rating product__sidebar-single style">
                <h3 className="product__sidebar-title">Reviews</h3>
                <div className="sidebar-rating-box sidebar-rating-box--style2">
                  <ul className="list-unstyled">
                    <li>
                      <input
                        type="radio"
                        id="fivestar"
                        name="rating"
                        checked="checked"
                      />
                      <label for="fivestar">
                        <i></i>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="fourstar" name="rating" />
                      <label for="fourstar">
                        <i></i>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star gray"></span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="threestar" name="rating" />
                      <label for="threestar">
                        <i></i>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star gray"></span>
                        <span className="icon-star gray"></span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="twostar" name="rating" />
                      <label for="twostar">
                        <i></i>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star gray"></span>
                        <span className="icon-star gray"></span>
                        <span className="icon-star gray"></span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="onestar" name="rating" />
                      <label for="onestar">
                        <i></i>
                        <span className="icon-star"></span>
                        <span className="icon-star gray"></span>
                        <span className="icon-star gray"></span>
                        <span className="icon-star gray"></span>
                        <span className="icon-star gray"></span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!--End Products Style1 Single Sidear --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
