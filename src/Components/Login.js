import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useCookies } from "react-cookie";
import "../css/login.css";
import { ip } from "../config/config";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies(["junggam-token"]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    await axios
      .post(`${ip}/api/authenticate`, {
        username: id,
        password: pw,
      })
      .then((response) => {
        alert("로그인에 성공하였습니다");
        setCookie("junggam-token", response.data.token);
        // setToken(response.data.token);
        history.push("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const onChangeHandler = (e) => {
    if (e.target.name === "id") {
      setId(e.target.value);
    } else if (e.target.name === "pw") {
      setPw(e.target.value);
    }
  };

  const goMainHandler = () => {
    history.push("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="login-wrapper">
        <div className="login-box">
          <div className="login-title">Login</div>
          <form onSubmit={onSubmitHandler}>
            <div className="login-input">
              ID <br />
              <input
                name="id"
                type="text"
                value={id}
                onChange={onChangeHandler}
              ></input>
            </div>
            <div className="login-input">
              PW
              <br />
              <input
                name="pw"
                type="password"
                value={pw}
                onChange={onChangeHandler}
              ></input>
            </div>
            <div className="login-input-bottom">
              <button type="button" onClick={goMainHandler}>
                메인
              </button>
              <input type="submit" value="로그인"></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
