import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "../../css/post.css";
import TextEditor from "./TextEditor";
import { ip } from "../../config/config";

const PostEdit = ({ history, ...props }) => {
  const [post, setPost] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [cookies] = useCookies(["junggam-token"]);

  useEffect(() => {
    if (props.match.params.postIdx === "new") {
    } else {
      getPost();
    }
  }, [props.match.params.postIdx]);

  const onPostSubmit = async (e) => {
    e.preventDefault();
    // console.log(content);
    if (post) {
      await axios
        .post(
          `${ip}:8080/api/board/${props.match.params.idx}/post`,
          {
            idx: post.idx,
            title: title,
            content: content,
          },
          {
            headers: {
              Authorization: "Bearer " + cookies["junggam-token"],
            },
          }
        )
        .then((response) => {
          alert("게시가 완료되었습니다");
          history.push(
            "/board/" + props.match.params.idx + "/post/" + response.data.idx
          );
        })
        .catch((error) => {
          if (error.response.data.status === 401) {
            alert("다시 로그인해주시기 바랍니다.");
          } else {
            alert("모든 값을 입력하시오.");
          }
        });
    } else {
      await axios
        .post(
          `${ip}/api/board/${props.match.params.idx}/post`,
          {
            title: title,
            content: content,
          },
          {
            headers: {
              Authorization: "Bearer " + cookies["junggam-token"],
            },
          }
        )
        .then((response) => {
          alert("게시가 완료되었습니다");
          history.push(
            "/board/" + props.match.params.idx + "/post/" + response.data.idx
          );
        })
        .catch((error) => {
          if (error.response.data.status === 401) {
            alert("다시 로그인해주시기 바랍니다.");
          } else {
            alert("모든 값을 입력하시오.");
          }
        });
    }
  };

  const getPost = async () => {
    const postIdx = props.match.params.postIdx;
    await axios
      .get(`${ip}/api/board/post/${postIdx}`)
      .then((response) => {
        setPost(response.data);
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  return (
    <>
      {!post ? (
        <form
          onSubmit={onPostSubmit}
          className="post-form"
          method="POST"
          action={`${ip}/api/board/
            ${props.match.params.idx}
          /post`}
        >
          <div className="board-wrapper">
            <div className="board-post-top">글 작성</div>
            <input
              className="board-post-title"
              onChange={onTitleChange}
              value={title}
              style={{ marginBottom: "30px" }}
            />
            <TextEditor setContent={setContent} content={content} />
            <input className="post-nav-edit" type="submit" value="게시하기" />
          </div>
        </form>
      ) : (
        <form
          onSubmit={onPostSubmit}
          className="post-form"
          method="POST"
          action={`${ip}/api/board/
            ${props.match.params.idx}
            /post`}
        >
          <div className="board-wrapper">
            <div className="board-post-top">글 작성</div>
            <input
              className="board-post-title"
              onChange={onTitleChange}
              value={title}
              style={{ marginBottom: "30px" }}
            />
            <TextEditor setContent={setContent} content={content} />
            <input className="post-nav-edit" type="submit" value="게시하기" />
          </div>
        </form>
      )}
    </>
  );
};

export default PostEdit;
