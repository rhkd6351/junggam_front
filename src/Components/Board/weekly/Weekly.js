import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../css/post.css";
import { Document, Page, pdfjs } from "react-pdf";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router";
import { ip } from "../../../config/config";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Weekly = (props) => {
  const [post, setPost] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [cookies] = useCookies();
  const history = useHistory();

  useEffect(() => {
    getPost();
  }, [props.match.params.postIdx, ip]);

  const getPost = async () => {
    const postIdx = props.match.params.postIdx;
    await axios
      .get(`${ip}/api/board/post/${postIdx}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onEditClick = async () => {
    await axios
      .post(`${ip}/api/valid`, null, {
        headers: {
          Authorization: "Bearer " + cookies["junggam-token"],
        },
      })
      .then(() => {
        window.scrollTo(0, 0);
        history.push(
          "/board/" +
            props.match.params.idx +
            "/post/" +
            props.match.params.postIdx +
            "/edit"
        );
      })
      .catch(() => {
        alert("관리자만 수정할 수 있습니다.");
      });
  };

  const onDeleteClick = async () => {
    if (!window.confirm("정말로 삭제하시겠습니까?")) return;

    await axios
      .delete(`${ip}/api/board/post/${post.idx}`, {
        headers: {
          Authorization: "Bearer " + cookies["junggam-token"],
        },
      })
      .then((response) => {
        alert("삭제에 성공하였습니다.");
        props.history.push("/board/" + props.match.params.idx);
      })
      .catch((error) => {
        console.log(error);
        alert("권한이 없습니다.");
      });
  };

  return (
    <>
      {!post ? (
        "Now Loading..."
      ) : (
        <div className="board-wrapper">
          <div className="board-post-top">게시글</div>
          <div className="board-post-title">{post.title}</div>
          <div className="board-post-info">
            <div className="post-info-em">작성자: {post.user.username}</div>
            {/* <div className="post-info-em">조회수: 0</div> */}
            <div className="post-info-em">
              작성일: {post.regDate.split("T")[0]}
            </div>
          </div>
          <div className="pdf-wrapper">
            <Document
              className="pdf-document"
              style={{ margin: "0 auto" }}
              height="100"
              width="100"
              file={post.content}
              onLoadSuccess={() => {
                console.log("object");
              }}
              onLoadError={(error) => {
                console.log(error);
              }}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <Document
              style={{ border: "1px solid black" }}
              width="10"
              file={post.content}
              onLoadSuccess={() => {
                console.log("object");
              }}
              onLoadError={(error) => {
                console.log(error);
              }}
            >
              <Page pageNumber={pageNumber + 1} />
            </Document>
          </div>
          <div className="post-nav">
            <button className="post-nav-edit" onClick={onEditClick}>
              수정
            </button>
            <button className="post-nav-delete" onClick={onDeleteClick}>
              삭제
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Weekly;
