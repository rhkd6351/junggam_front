import React, { useEffect } from "react";
import danielImage from "../img/daniel.png";
import HomeBoard from "../Components/Home/HomeBoard";
import "../css/style.css";
import $ from "jquery";
import "jquery-ui";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.min.css";
import axios from "axios";
import { useHistory } from "react-router";

const Home = () => {
  let currentFvTitle = true;
  let currentSecondContent = true;
  let currentThirdContent = true;
  let currentFourthContent = true;

  const history = useHistory();

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
    if (scrollY > 1840 && !currentFourthContent) {
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

  // const getMapNaverApi = () => {
  //   axios
  //     .get(
  //       "https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=300&h=300&center=127.1054221,37.3591614&level=16",
  //       {
  //         headers: {
  //           "X-NCP-APIGW-API-KEY-ID": "24vgk3et8c",
  //           "X-NCP-APIGW-API-KEY": "FIMjdTNfahN84Et201a3otFjioq5In0hbPIt5avN",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    // getMapNaverApi();
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
          <div
            className="favorite-menu-item"
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.location.href =
                "https://www.youtube.com/channel/UCZn-Guce3Q_NLtdfsiooSZg";
            }}
          >
            <div className="favorite-menu-item-title">온라인 예배</div>
            <div
              className="favorite-menu-item-subt"
              style={{ cursor: "pointer" }}
              onClick={() => {}}
            >
              온라인으로 예배를 드리세요
            </div>
          </div>
          <div
            className="favorite-menu-item"
            style={{ cursor: "pointer" }}
            onClick={() => {
              history.push("/board/5");
            }}
          >
            <div className="favorite-menu-item-title">이번주 말씀</div>
            <div className="favorite-menu-item-subt">
              이번주 말씀을 묵상해보세요
            </div>
          </div>
          <div
            className="favorite-menu-item"
            style={{ cursor: "pointer" }}
            onClick={() => {
              history.push("/board/3");
            }}
          >
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
            <a
              href="https://www.danielprayer.org/hmpg/biz/main/HmpgMain.do"
              style={{ textDecoration: "underline" }}
            >
              홈페이지
              {/* <svg
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
              </svg> */}
            </a>
          </div>
          <div className="banner-nav-em">
            <a
              href="http://www.danielprayer.org/hmpg/biz/dtv/DtvLive.do"
              style={{ textDecoration: "underline" }}
            >
              방송시청
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
              치유와 회복 그리고 은혜가 넘치고 문화명령을 실천하는 정감있는교회
              홈페이지를 방문해 주셔서 감사합니다.
              <br />
              예수님은 이 땅에 오셔서 하나님의 말씀을 가르치시고, 모든 병과 약한
              것을 고치시고, 천국 복음을 전파하셨습니다. 그 결과는 변화입니다.
              <br />그 변화는 정직한 나가 되며, 감사하는 우리가 되고, 정감
              넘치는 사회가 되는 것입니다. 이것을 실천하기 위해 창조의
              문화명령에 순종하는 것입니다.
              <br /> 사람이 살아가기 위해 집이 필요하듯 우리 영혼도 집이
              필요합니다. 교회는 여러분을 위해 준비된 영혼의 집입니다. 여기
              고향의 정감이 넘치는 시골의 한적한 곳에 자리한 교회가 있습니다.
              <br />
              정감있는교회는 다음 세대에 신앙을 계승하는 교회로 쓰임 받기를
              기도합니다.
              <br /> 우리는 다음 세대를 성경적 세계관으로 양육하는 것이야말로
              최고의 복음 전도라고 믿습니다. 급변하는 세상 속에서도 그리스도의
              심장과 능력을 갖춘 온전한 제자들이 세계 교회와 사회에 공헌하도록
              신앙교육에 쓰임 받는 교회가 되기를 기도합니다. <br />
              무슨 문제가 있든, 어떤 인생의 위기를 만났든 모두 가지고
              나오십시오. 인생의 소망은 오직 예수 그리스도께 있습니다. 예수
              그리스도의 몸인 정감있는교회가 함께 하겠습니다.
              <br />
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
          <div className="bottom-map-image">
            {/* <img src="https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=300&h=300&center=127.141755,37.318835&X-NCP-APIGW-API-KEY-ID=24vgk3et8c" /> */}
            {/* <img src="https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=1120&h=350&center=127.0274655,37.1815686&level=13&markers=type:d|size:mid|pos:127.0274655 37.1815686&X-NCP-APIGW-API-KEY-ID=24vgk3et8c" /> */}
          </div>
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
