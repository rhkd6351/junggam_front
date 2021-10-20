import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../css/post.css";
import textEditor from "./TextEditor";

const PostEdit = ({ ...props }) => {
  const [post, setPost] = useState();

  useEffect(() => {
    if (props.match.params.postIdx == "new") {
    } else {
      getPost();
    }
    console.log(props);
  });

  const getPost = async () => {
    const postIdx = props.match.params.postIdx;
    await axios
      .get("http://localhost:8080/api/board/post/" + postIdx)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {!post ? (
        <form
          className="post-form"
          method="POST"
          action={
            "http://localhost:8080/api/board/" +
            props.match.params.idx +
            "/post"
          }
        >
          <div className="board-wrapper">
            <div className="board-post-top">글 작성</div>
            <input
              className="board-post-title"
              style={{ marginBottom: "30px" }}
            />
            <textEditor />
            <div className="board-post-content"></div>
          </div>
        </form>
      ) : (
        <div className="board-wrapper">
          <div className="board-post-top">게시글</div>
          <div className="board-post-title">{post.title}</div>
          <div className="board-post-info">
            <div className="post-info-em">작성자: {post.user.username}</div>
            <div className="post-info-em">조회수: 0</div>
            <div className="post-info-em">작성일: {post.regDate}</div>
          </div>
          <div className="board-post-content">{post.content}</div>
        </div>
      )}
    </>
  );
};

export default PostEdit;
