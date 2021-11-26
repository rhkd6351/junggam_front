import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "jquery-ui";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.min.css";

const Navigation = ({ ...props }) => {
  const [color, setColor] = useState("white");
  const [isMenuOn, setIsMenuOn] = useState(false);

  const colorSet = {
    board: "#eeefc6",
    home: "#efdbc6",
  };

  let currentNav = false;
  const eventListner = (event) => {
    let scrollY = $(window).scrollTop();
    if (scrollY > 100 && !currentNav) {
      currentNav = true;
      $(".header").css("border-bottom", "2px solid #f3f3f3").animate(
        {
          backgroundColor: "white",
          height: "64px",
        },
        300
      );
      $(".drop-menu").animate(
        {
          marginTop: "64px",
        },
        300
      );
      $(".menu-button").animate(
        {
          lineHeight: "80px",
        },
        300
      );

      $(".header-content-wrapper").animate(
        {
          lineHeight: "64px",
        },
        300
      );
      $(".nav").animate(
        {
          lineHeight: "60px",
        },
        300
      );
    }
    //nav bar animation
    if (scrollY < 100 && currentNav) {
      currentNav = false;
      $(".header").css("border-bottom", "none").animate(
        {
          backgroundColor: color,
          height: "137px",
          border: "3px solid black",
        },
        300
      );
      $(".drop-menu").animate(
        {
          marginTop: "137px",
        },
        300
      );
      $(".menu-button").animate(
        {
          lineHeight: "160px",
        },
        300
      );
      $(".header-content-wrapper").animate(
        {
          lineHeight: "137px",
        },
        300
      );
      $(".nav").animate(
        {
          lineHeight: "70px",
        },
        300
      );
    }
  };

  const onMenuClick = () => {
    if (isMenuOn === false) {
      setIsMenuOn(true);
      $(".drop-menu").css("display", "block").animate(
        {
          opacity: "100%",
        },
        300
      );
    } else {
      setIsMenuOn(false);
      $(".drop-menu")
        .animate(
          {
            opacity: "0%",
          },
          300
        )
        .delay(300)
        .css("display", "none");
    }
  };

  useEffect(() => {
    switch (props.location.pathname.split("/")[1]) {
      case "board":
        setColor(colorSet.board);
        break;
      case "":
        setColor(colorSet.home);
        break;
      default:
        setColor("white");
    }

    if ($(window).scrollTop() < 100) {
      $(".header").css("border-bottom", "none").animate(
        {
          backgroundColor: color,
          height: "137px",
          border: "3px solid black",
        },
        0
      );
      $(".menu-button").animate(
        {
          lineHeight: "160px",
        },
        0
      );
      $(".header-content-wrapper").animate(
        {
          lineHeight: "137px",
        },
        0
      );
      $(".nav").animate(
        {
          lineHeight: "70px",
        },
        0
      );
    }

    $(window).resize(() => {
      if ($(window).width() >= 550) {
        $(".drop-menu").css("display", "none").css("opacity", "0%");
        setIsMenuOn("false");
      }
    });
    window.addEventListener("scroll", eventListner);
    return () => {
      window.removeEventListener("scroll", eventListner);
    };
  });

  const dropMenuClickManager = () => {
    setIsMenuOn(false);
    $(".drop-menu")
      .animate(
        {
          opacity: "0%",
        },
        300
      )
      .delay(300)
      .css("display", "none");
  };

  return (
    <>
      <div className="top">
        <div className="drop-menu">
          <li className="drop-menu-em">
            <Link to="/" onClick={dropMenuClickManager}>
              메인
            </Link>
          </li>
          <li className="drop-menu-em">
            <Link to="/board/1" onClick={dropMenuClickManager}>
              정감소식
            </Link>
          </li>
          <li className="drop-menu-em">
            <Link to="/board/2" onClick={dropMenuClickManager}>
              갤러리
            </Link>
          </li>
          <li className="drop-menu-em">
            <Link to="/board/3" onClick={dropMenuClickManager}>
              주보
            </Link>
          </li>
          <li className="drop-menu-em">
            <Link to="/board/6" onClick={dropMenuClickManager}>
              칼럼
            </Link>
          </li>
        </div>
        <div className="header" style={{ backgroundColor: color }}>
          <div className="header-content-wrapper">
            <div className="header-title">
              <Link to="/">정감있는교회</Link>
            </div>
            <div className="nav">
              <div className="nav-em">
                <Link to="/">메인</Link>
              </div>
              <div className="nav-em">
                <Link to="/board/1">정감소식</Link>
              </div>
              <div className="nav-em">
                <Link to="/board/2">갤러리</Link>
              </div>
              <div className="nav-em">
                <Link to="/board/3">주보</Link>
              </div>
              <div className="nav-em">
                <Link to="/board/6">칼럼</Link>
              </div>
            </div>
            <div
              className="menu-button"
              style={{ width: "60px" }}
              onClick={onMenuClick}
            >
              <svg
                width="37"
                height="29"
                viewBox="0 0 37 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3H37" stroke="black" stroke-width="5" />
                <path d="M0 26H37" stroke="black" stroke-width="5" />
                <path d="M0 14H37" stroke="black" stroke-width="5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
