import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ip } from "../../config/config";

const HomePostList = ({ board }) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPostList();
  }, []);

  const getPostList = () => {
    axios
      .get(`${ip}/api/board/${board.idx}/posts?pno=1`)
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
                <div className="main-second-left-em" key={em.idx}>
                  <div className="em-title">
                    <Link to={"/board/" + board.idx + "/post/" + em.idx}>
                      {em.title}
                    </Link>
                  </div>
                  <eiv className="em-date">{em.regDate.split("T")[0]}</eiv>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default HomePostList;
