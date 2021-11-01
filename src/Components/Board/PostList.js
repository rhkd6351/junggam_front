import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../../css/bible.css";
import { ip } from "../../config/config";

const PostList = ({ boardIdx }) => {
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [cookies] = useCookies(["junggam-token"]);
  const history = useHistory();
  const [firstWord, setFirstWord] = useState();

  const getFirstIfBible = (posts) => {
    if (!(boardIdx === 5)) return;

    setFirstWord(posts[0]);
  };

  const getPostList = () => {
    axios
      .get(`${ip}/api/board/${boardIdx}/posts?pno=${page}`)
      .then((response) => {
        setTotalPage(response.data.totalPage);
        setPosts(response.data.posts);
        getFirstIfBible(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onPageClick = (num) => {
    setPage(num);
  };

  const onWriteButtonClick = () => {
    console.log(cookies["junggam-token"]);

    axios
      .post(`${ip}/api/valid`, null, {
        headers: {
          Authorization: "Bearer " + cookies["junggam-token"],
        },
      })
      .then(() => {
        history.push("/board/" + boardIdx + "/post/new/edit");
      })
      .catch(() => {
        alert("관리자만 작성할 수 있습니다.");
      });
  };

  useEffect(() => {
    setPage(1);
    getPostList();
  }, [boardIdx, page]);

  return (
    <>
      {boardIdx === 5 && firstWord && (
        <div className="bible-wrapper">
          <div
            className="bible-title"
            dangerouslySetInnerHTML={{ __html: firstWord.title }}
          ></div>
          <div
            className="bible-content"
            dangerouslySetInnerHTML={{ __html: firstWord.content }}
          ></div>
        </div>
      )}
      <div className="board-wrapper">
        <div className="board">
          <div className="list-em">
            <div className="list-em-idx">번호</div>
            <div className="list-em-title">제목</div>
            <div className="list-em-writer">작성자</div>
            <div className="list-em-regDate">등록일</div>
            {/* <div className="list-em-views">조회수</div> */}
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
                      {em.regDate.split("T")[0].substring(5)}
                    </div>
                    {/* <div className="list-em-views">0</div> */}
                  </div>
                );
              })}
        </div>
        <div className="board-bottom">
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
          <div className="board-write-button" onClick={onWriteButtonClick}>
            글쓰기
            {/* <Link to={"/board/" + boardIdx + "/post/new/edit"}></Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
