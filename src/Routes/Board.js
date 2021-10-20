import React, { useEffect, useState } from "react";
import "jquery-ui";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.min.css";
import "../css/board.css";
import PostList from "../Components/Board/PostList";
import axios from "axios";
import { Route, Router, Switch } from "react-router";
import PostEdit from "../Components/Board/PostEdit";
import Post from "../Components/Board/Post";

const Board = (props) => {
  const [board, setBoard] = useState();

  const getBoardByIdx = async (idx) => {
    await axios
      .get(`http://localhost:8080/api/board/${idx}`)
      .then((response) => {
        setBoard(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBoardByIdx(props.match.params.idx);
  }, [props.match.params.idx]);

  return (
    <>
      {!board ? (
        <div className="top-board">
          <div className="top-banner">
            <div className="banner-left">
              <div className="banner-title">
                Loading... <br />
              </div>
              <div className="banner-subtitle">Loading...</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="top-board">
          <div className="top-banner">
            <div className="banner-left">
              <div className="banner-title">
                {board.title} <br />
              </div>
              <div className="banner-subtitle">{board.description}</div>
            </div>
          </div>
        </div>
      )}

      <Switch>
        <Route exact path="/board/:idx">
          <PostList board={board} boardIdx={props.match.params.idx} />
        </Route>
        <Route exact path="/board/:idx/post/:postIdx" component={Post}></Route>
        <Route
          exact
          path="/board/:idx/post/:postIdx/edit"
          component={PostEdit}
        ></Route>
        <Route
          exact
          path="/board/:idx/post/new/edit"
          component={PostEdit}
        ></Route>
      </Switch>
    </>
  );
};

export default Board;
