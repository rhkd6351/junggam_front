import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "jquery-ui";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.min.css";

const Navigation = (props) => {
  const [color, setColor] = useState("white");

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

  useEffect(() => {
    console.log(props.location.pathname.split("/")[1]);
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

    window.addEventListener("scroll", eventListner);
    return () => {
      window.removeEventListener("scroll", eventListner);
    };
  });

  return (
    <>
      <div className="top">
        <div className="header" style={{ backgroundColor: color }}>
          <div className="header-content-wrapper">
            <div className="header-title">
              <Link to="/">정감있는교회</Link>
            </div>
            <div className="nav">
              <div className="nav-em">
                <Link to="/">교회소개</Link>
              </div>
              <div className="nav-em">
                <Link to="/board/2">갤러리</Link>
              </div>
              <div className="nav-em">
                <Link to="/board/1">공지사항</Link>
              </div>
              <div className="nav-em">자료실</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
