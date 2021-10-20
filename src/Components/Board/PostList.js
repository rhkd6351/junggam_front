import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = ({ board, boardIdx }) => {
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  const getPostList = () => {
    axios
      .get(`http://localhost:8080/api/board/${boardIdx}/posts?pno=${page}`)
      .then((response) => {
        setTotalPage(response.data.totalPage);
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getFirstPostList = () => {
    axios
      .get(`http://localhost:8080/api/board/${boardIdx}/posts?pno=1`)
      .then((response) => {
        setTotalPage(response.data.totalPage);
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onPageClick = (num) => {
    setPage(num);
  };

  useEffect(() => {
    setPage(1);
    getFirstPostList();
  }, [boardIdx]);

  useEffect(() => {
    getPostList();
  }, [page]);

  return (
    <div className="board-wrapper">
      <div className="board">
        <div className="list-em">
          <div className="list-em-idx">번호</div>
          <div className="list-em-title">제목</div>
          <div className="list-em-writer">작성자</div>
          <div className="list-em-regDate">등록일</div>
          <div className="list-em-views">조회수</div>
        </div>
        {!posts
          ? "now loading..."
          : posts.map((em) => {
              return (
                <div className="list-em">
                  <div className="list-em-idx">{em.idx}</div>
                  <div className="list-em-title">
                    <Link to={"/board/" + boardIdx + "/post/" + em.idx}>
                      {em.title}
                    </Link>
                  </div>
                  <div className="list-em-writer">{em.user.username}</div>
                  <div className="list-em-regDate">
                    {em.regDate.split("T")[0]}
                  </div>
                  <div className="list-em-views">0</div>
                </div>
              );
            })}
      </div>
      <div className="board-bottom">
        <div style={{ width: "150px" }}></div>
        <div className="board-number">
          <div className="board-number-em" onClick={() => onPageClick(1)}>
            {"<<"}
          </div>
          <div
            className="board-number-em"
            onClick={() => onPageClick(page - 2)}
          >
            {page - 2 < 1 ? " " : page - 2}
          </div>
          <div
            className="board-number-em"
            onClick={() => onPageClick(page - 1)}
          >
            {page - 1 < 1 ? " " : page - 1}
          </div>
          <div
            className="board-number-em"
            onClick={() => onPageClick(page)}
            style={{ fontSize: "1.8em" }}
          >
            {page}
          </div>
          <div
            className="board-number-em"
            onClick={() => onPageClick(page + 1)}
          >
            {totalPage >= page + 1 ? page + 1 : " "}
          </div>
          <div
            className="board-number-em"
            onClick={() => onPageClick(page + 2)}
          >
            {totalPage >= page + 2 ? page + 2 : " "}
          </div>
          <div
            className="board-number-em"
            onClick={() => onPageClick(totalPage)}
          >
            {">>"}
          </div>
        </div>
        <div className="board-write-button">
          <Link to={"/board/" + boardIdx + "/post/new/edit"}>글쓰기</Link>
        </div>
      </div>
    </div>
  );
};

export default PostList;
