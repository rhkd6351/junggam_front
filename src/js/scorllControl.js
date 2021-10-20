import $ from "jquery";
import "jquery-ui";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.min.css";

$(document).ready(function () {
  let currentFvTitle = true;
  let currentSecondContent = true;
  let currentThirdContent = true;
  let currentFourthContent = true;

  $(window).scrollTop(0);
  $(window).scroll(function () {
    let scrollY = $(window).scrollTop();

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
