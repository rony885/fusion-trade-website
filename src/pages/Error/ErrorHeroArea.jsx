import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorHeroArea = () => {
  return (
    <Wrapper>
      <section class="page-header">
        <div
          class="page-header__bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/page-header-bg.jpg)",
            height: "500px",
          }}
        ></div>
        <div class="container">
          <div class="page-header__inner">
            <h2>404 Error</h2>
            <div class="thm-breadcrumb__box">
              <ul class="thm-breadcrumb list-unstyled">
                <li>
                  <Link to="/">
                    <i class="fas fa-home"></i>Home
                  </Link>
                </li>
                <li>
                  <span class="icon-right-arrow-1"></span>
                </li>
                <li>404 Error</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ErrorHeroArea;
