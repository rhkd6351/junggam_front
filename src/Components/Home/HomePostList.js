import axios from "axios";
import { post } from "jquery";
import React, { useEffect, useState } from "react";

const HomePostList = ({ board }) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPostList();
  }, []);

  const getPostList = () => {
    axios
      .get(`http://localhost:8080/api/board/${board.idx}/posts?pno=1`)
      .then((response) => {
        setPosts(response.data.posts.slice(0, 4));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="main-second-left-list">
        {!posts
          ? "loading..."
          : posts.map((em) => {
              return (
                <div className="main-second-left-em">
                  <div className="em-title">{em.title}</div>
                  <eiv className="em-date">{em.regDate.split("T")[0]}</eiv>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default HomePostList;
