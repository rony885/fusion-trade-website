import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import productData from "../../productData.js";

const ProductInfo = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  console.log(products);

  useEffect(() => {
    // Simulate fetching data from an API or database
    setProducts(productData);
  }, []);

  const tabs = [
    "Stationery",
    "Medical & Sergical Item",
    "Home & Kitchen",
    "Accessories",
  ];

  // Handler to update active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  

  return (
    <Wrapper>
      <section className="product">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="product__items">
                <div className="row">
                  <div className="col-xl-12 mb-4">
                    <div className="shop-category product__sidebar-single">
                      <h3 className="fs-4 fw-bold text-center text-uppercase mb-4">
                        Categories
                      </h3>
                      <ul className="list-unstyled d-flex gap-2 category-list row_horizon">
                        <li>
                          <button
                            className={`category-item ${
                              activeTab === "All" ? "active" : ""
                            }`}
                            onClick={() => handleTabChange("All")}
                          >
                            All
                          </button>
                        </li>
                        {tabs.map((tab) => (
                          <li key={tab}>
                            <button
                              className={`category-item ${
                                activeTab === tab ? "active" : ""
                              }`}
                              onClick={() => handleTabChange(tab)}
                            >
                              {tab}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="product__all">
                  <div className="product__all-tab">
                    <div className="tabs-content-box">
                      <div className="tab-content-box-item tab-content-box-item-active">
                        <div className="product__all-tab-content-box-item">
                          <div className="product__all-tab-single">
                            <div className="row">
                              {products.map((product) => {
                                return (
                                  <div
                                    key={product.id}
                                    className="col-xl-3 col-lg-6 col-md-6"
                                  >
                                    <div className="single-product-style1">
                                      <div className="single-product-style1__img">
                                        <img
                                          //   src="assets/images/shop/shop-product-1-1.png"
                                          src={product.image}
                                          alt="product Imagee"
                                        />
                                        <img
                                          src={product.image}
                                          alt="product Imagee"
                                        />
                                      </div>
                                      <div className="single-product-style1__content">
                                        <div className="single-product-style1__content-left text-center">
                                          <h4>
                                            <Link to="/product-details">
                                              {product.name}
                                            </Link>
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-auto d-flex justify-content-start mt-4">
                      <div className="product__showing-result">
                        <div className="product__showing-text-box">
                          <p className="product__showing-text text-white mb-0">
                            Showing 1–12/14 of 14 results
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-auto d-flex justify-content-end">
                      <ul className="styled-pagination clearfix list-unstyled mb-0">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .row_horizon {
    overflow-x: auto !important;
    flex-wrap: nowrap !important;
    -webkit-overflow-scrolling: touch; /* smooth scroll for touch devices */
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: #555555 #f1f1f1; /* Firefox */
    padding-bottom: 5px;
  }

  /* Scrollbar styling for Chrome, Safari, Edge */
  .row_horizon::-webkit-scrollbar {
    height: 6px;
  }

  .row_horizon::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  .row_horizon::-webkit-scrollbar-thumb {
    background: #f433a2; /* pink/red accent */
    border-radius: 10px;
  }

  .row_horizon::-webkit-scrollbar-thumb:hover {
    background: #d71d8c; /* darker shade on hover */
  }

  .category-item {
    background: #0b192c;
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 8px 18px;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    white-space: nowrap; /* prevent wrapping */
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .category-item:hover {
    background: #ffc009;
    border-color: #ffc009;
    color: #fff;
  }

  .category-item.active {
    background: #ffc009;
    border-color: #ffc009;
    color: #fff;
  }

  /* ======================= */
  .single-product-style1__content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .single-product-style1__content-left {
    display: block;
    width: 100%;
  }
`;

export default ProductInfo;
