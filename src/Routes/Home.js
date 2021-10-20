import React, { useEffect } from "react";
import danielImage from "../img/daniel.png";
import HomeBoard from "../Components/Home/HomeBoard";
import "../css/style.css";
import $ from "jquery";
import "jquery-ui";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.min.css";

const Home = () => {
  let currentFvTitle = false;
  let currentSecondContent = true;
  let currentThirdContent = true;
  let currentFourthContent = true;
  const scrollEventListner = () => {
    let scrollY = $(window).scrollTop();
    //favorite menu animation
    if (scrollY > 100 && !currentFvTitle) {
      currentFvTitle = true;
      $(".favorite-menu-item").animate(
        {
          opacity: "100%",
          marginTop: "0px",
        },
        300
      );
    } else if (scrollY < 50 && currentFvTitle) {
      currentFvTitle = false;
      $(".favorite-menu-item").animate(
        {
          opacity: "0%",
          marginTop: "50px",
        },
        300
      );
    }
    // second menu animation
    if (scrollY > 540 && !currentSecondContent) {
      currentSecondContent = true;
      $(".main-second-left").animate(
        {
          opacity: "100%",
          marginTop: "0px",
        },
        600
      );
    } else if (scrollY < 300 && currentSecondContent) {
      currentSecondContent = false;
      $(".main-second-left").animate(
        {
          opacity: "0%",
          marginTop: "50px",
        },
        600
      );
    }

    // third menu animation
    if (scrollY > 1400 && !currentThirdContent) {
      currentThirdContent = true;
      $(".bottom-intro-left").animate(
        {
          opacity: "100%",
          marginTop: "0px",
        },
        600
      );
      $(".bottom-intro-right").animate(
        {
          opacity: "100%",
          marginTop: "0px",
        },
        600
      );
    } else if (scrollY < 1000 && currentThirdContent) {
      currentThirdContent = false;
      $(".bottom-intro-left").animate(
        {
          opacity: "0%",
          marginTop: "50px",
        },
        600
      );
      $(".bottom-intro-right").animate(
        {
          opacity: "0%",
          marginTop: "50px",
        },
        600
      );
    }

    // fourth menu animation
    if (scrollY > 2340 && !currentFourthContent) {
      currentFourthContent = true;
      $(".bottom-map-title").animate(
        {
          opacity: "100%",
          marginTop: "0px",
        },
        600
      );
      $(".bottom-map-image").animate(
        {
          opacity: "100%",
          marginTop: "0px",
        },
        600
      );
    } else if (scrollY < 1500 && currentFourthContent) {
      currentFourthContent = false;
      $(".bottom-map-title").animate(
        {
          opacity: "0%",
          marginTop: "50px",
        },
        600
      );
      $(".bottom-map-image").animate(
        {
          opacity: "0%",
          marginTop: "50px",
        },
        600
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEventListner);
    return () => {
      window.removeEventListener("scroll", scrollEventListner);
    };
  });

  return (
    <>
      <div className="top">
        <div className="top-banner">
          <div className="banner-left">
            <div className="banner-title">
              주 예수 <br />
              그리스도를 <br />
              변함없이 사랑하자 <br />
            </div>
            <div className="banner-subtitle">
              Grace to all who love our Lord Jesus Christ <br />
              with an undying love
            </div>
            <div className="banner-desc">에베소서 6장 24절 (2021 표어)</div>
          </div>
          <div className="banner-right">
            <div className="banner-image">
              <div className="img"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-favorite-menu">
        <div className="favorite-menu-title">즐겨찾는 메뉴</div>
        <div className="favorite-menu-items">
          <div className="favorite-menu-item">
            <div className="favorite-menu-item-title">온라인예배</div>
            <div className="favorite-menu-item-subt">
              어느곳에서든 예배를 드릴 수 있습니다
            </div>
          </div>
          <div className="favorite-menu-item">
            <div className="favorite-menu-item-title">이번주 말씀</div>
            <div className="favorite-menu-item-subt">
              이번주 말씀을 묵상해보세요
            </div>
          </div>
          <div className="favorite-menu-item">
            <div className="favorite-menu-item-title">교회 주보</div>
            <div className="favorite-menu-item-subt">
              이번주 교회 주보 정보를 확인하세요
            </div>
          </div>
        </div>
      </div>

      <div className="main-second-menu">
        <HomeBoard boardNo={1} /> {/* 정감소식 */}
        <HomeBoard boardNo={2} /> {/* 갤러리 */}
      </div>

      <div className="intercept-banner">
        <img src={danielImage} alt="다니엘기도회" className="banner-img" />
        <div className="banner-nav">
          <div className="banner-nav-em">
            <a href="#">
              공식 홈페이지
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="9.5" fill="white" stroke="black" />
                <path
                  d="M15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967L10.7574 4.6967C10.4645 4.40381 9.98959 4.40381 9.6967 4.6967C9.40381 4.98959 9.40381 5.46447 9.6967 5.75736L13.9393 10L9.6967 14.2426C9.40381 14.5355 9.40381 15.0104 9.6967 15.3033C9.98959 15.5962 10.4645 15.5962 10.7574 15.3033L15.5303 10.5303ZM5 10.75L15 10.75V9.25L5 9.25V10.75Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
          <div className="banner-nav-em">
            <a href="#">
              방송 시청
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="9.5" fill="white" stroke="black" />
                <path
                  d="M15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967L10.7574 4.6967C10.4645 4.40381 9.98959 4.40381 9.6967 4.6967C9.40381 4.98959 9.40381 5.46447 9.6967 5.75736L13.9393 10L9.6967 14.2426C9.40381 14.5355 9.40381 15.0104 9.6967 15.3033C9.98959 15.5962 10.4645 15.5962 10.7574 15.3033L15.5303 10.5303ZM5 10.75L15 10.75V9.25L5 9.25V10.75Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-intro">
          <div className="bottom-intro-left">
            <div className="bottom-intro-left-title">
              정감있는 교회에 오신것을 환영합니다
            </div>
            <div className="bottom-intro-left-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lobortis efficitur purus vel sagittis. Nam in nulla at justo
              pretium tincidunt. Sed efficitur dui nec volutpat laoreet. Nunc
              efficitur, nibh eget sodales accumsan, risus odio cursus lacus,
              dignissim aliquet enim lacus tempor nunc. Donec varius, libero sed
              placerat tristique, odio nisi pulvin
            </div>
            <div className="bottom-intro-left-minister">
              <span classNameName="spot">담임목사</span>
              임형만
            </div>
          </div>
          <div className="bottom-intro-right"></div>
        </div>

        <div className="bottom-map">
          <div className="bottom-map-title">찾아오는 길</div>
          <div className="bottom-map-image"></div>
          <div className="bottom-map-desc">
            18102 경기도 오산시 독산성로 281-20(지곶동 32번지)
            <br />
            031-378-1491
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
