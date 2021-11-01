import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../css/post.css";
import { useCookies } from "react-cookie";
import { ip } from "../../../config/config";

const WeeklyEdit = ({ history, ...props }) => {
  const [post, setPost] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [cookies] = useCookies(["junggam-token"]);

  useEffect(() => {
    console.log(props.match.params.postIdx);
    if (props.match.params.postIdx === "new") {
    } else {
      getPost();
    }
  }, []);

  const onPostSubmit = async (e) => {
    e.preventDefault();
    // console.log(content);
    if (post) {
      await axios
        .post(
          `${ip}/api/board/${props.match.params.idx}/post`,
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
  };

  const onFileUploadHandler = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    await axios
      .post(`${ip}/api/file`, formData, {
        headers: {
          Authorization: "Bearer " + cookies["junggam-token"],
        },
      })
      .then((response) => {
        setContent(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {!post ? (
        <form onSubmit={onPostSubmit} className="post-form" method="POST">
          <div className="board-wrapper">
            <div className="board-post-top">글 작성</div>
            <input
              className="board-post-title"
              onChange={onTitleChange}
              value={title}
              style={{ marginBottom: "30px" }}
            />
            <h3 style={{ fontSize: "20px", fontWeight: "800" }}>
              PDF 파일 선택
            </h3>
            <br />
            <input type="file" onChange={onFileUploadHandler} />
            <input
              type="submit"
              value="게시하기"
              style={{
                float: "right",
                backgroundColor: "white",
                border: "2px solid black",
              }}
            />
          </div>
        </form>
      ) : (
        <form onSubmit={onPostSubmit} className="post-form" method="POST">
          <div className="board-wrapper">
            <div className="board-post-top">글 작성</div>
            <input
              className="board-post-title"
              onChange={onTitleChange}
              value={title}
              style={{ marginBottom: "30px" }}
            />
            <h3 style={{ fontSize: "20px", fontWeight: "800" }}>
              PDF 파일 선택 (파일 선택 안할시 기존파일 유지)
            </h3>
            <br />
            <input type="file" onChange={onFileUploadHandler} />
            <input
              type="submit"
              value="게시하기"
              style={{
                float: "right",
                backgroundColor: "white",
                border: "2px solid black",
              }}
            />
          </div>
        </form>
      )}
    </>
  );
};

export default WeeklyEdit;
