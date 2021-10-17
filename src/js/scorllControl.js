import jquery from "jquery";
import $ from "jquery";
import "jquery-ui";

$(document).ready(function () {
  let currentNav = false;
  let currentFvTitle = true;
  let currentSecondContent = true;
  let currentThirdContent = true;
  let currentFourthContent = true;

  $(window).scrollTop(0);
  $(window).scroll(function () {
    let scrollY = $(window).scrollTop();

    //nav bar animation
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
      console.log("wow");
      $(".header").css("border-bottom", "none").animate(
        {
          backgroundColor: "#efdbc6",
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
    //favorite menu animation
    if (scrollY > 100 && !currentFvTitle) {
      currentFvTitle = true;
      $(".favorite-menu-item").animate(
        {
          opacity: "100%",
          marginTop: "0px",
        },
        600
      );
    } else if (scrollY < 100 && currentFvTitle) {
      currentFvTitle = false;
      $(".favorite-menu-item").animate(
        {
          opacity: "0%",
          marginTop: "50px",
        },
        600
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
    } else if (scrollY < 540 && currentSecondContent) {
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
    } else if (scrollY < 1400 && currentThirdContent) {
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
    } else if (scrollY < 2340 && currentFourthContent) {
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

    // console.log(scrollY);
  });
});
