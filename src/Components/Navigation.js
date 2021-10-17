import react from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="top">
        <div className="header">
          <div className="header-content-wrapper">
            <div className="header-title">
              <Link to="/">정감있는교회</Link>
            </div>
            <div className="nav">
              <div className="nav-em">교회소개</div>
              <div className="nav-em">갤러리</div>
              <div className="nav-em">공지사항</div>
              <div className="nav-em">자료실</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
