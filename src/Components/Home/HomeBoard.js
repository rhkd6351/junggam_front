import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import HomePostList from "./HomePostList";
import { Link } from "react-router-dom";

const HomeBoard = ({ boardNo }) => {
  const [board, setBoard] = useState();

  useEffect(() => {
    getBoardByIdx(boardNo);
  }, []);

  const getBoardByIdx = async (idx) => {
    await axios
      .get(`http://localhost:8080/api/board/${idx}`)
      .then((response) => {
        setBoard(response.data);
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {!board ? (
        "loading..."
      ) : (
        <div className="main-second-left">
          <div className="main-second-left-header">
            <div className="header-title">{board.title}</div>
            <div className="header-plus">
              <Link to={"/board/" + board.idx}>더보기+</Link>
            </div>
          </div>
          <HomePostList board={board} />
        </div>
      )}
    </>
  );
};

export default HomeBoard;
