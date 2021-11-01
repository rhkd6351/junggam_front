import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const Footer = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["junggam-token"]);

  const onLogoutClick = () => {
    removeCookie(["junggam-token"]);
    alert("로그아웃 되었습니다.");
  };

  return (
    <div className="footer">
      <div className="footer-text">
        담 임 : 임 형 만 목사 T. 010-5613-8865
        <br />
        경기도 오산시 독산성로 281-20(지곶동 32번지) 18102
        <br />
        ☏031-378-1491
        <br />
        <Link to="/login">관리자</Link>
        &nbsp;&nbsp;{" "}
        <button
          onClick={onLogoutClick}
          style={{ backgroundColor: "#e1e1e1", border: "none" }}
        >
          로그아웃
        </button>
      </div>

      <div className="footer-icons"></div>
    </div>
  );
};

export default Footer;
