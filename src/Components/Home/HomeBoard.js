import React, { useEffect, useState } from "react";
import axios from "axios";
import HomePostList from "./HomePostList";
import { Link } from "react-router-dom";
import { ip } from "../../config/config";

const HomeBoard = ({ boardNo }) => {
  const [board, setBoard] = useState();

  useEffect(() => {
    getBoardByIdx(boardNo);
  }, []);

  const getBoardByIdx = async (idx) => {
    await axios
      .get(`${ip}/api/board/${idx}`)
      .then((response) => {
        setBoard(response.data);
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
