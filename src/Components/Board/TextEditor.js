import React, { useEffect } from "react";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import "react-summernote/lang/summernote-ru-RU";
import "summernote-file";
import { ip } from "../../config/config";

import "bootstrap/js/modal";
import "bootstrap/js/dropdown";
import "bootstrap/js/tooltip";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useCookies } from "react-cookie";

const TextEditor = ({ setContent, content, ...props }) => {
  const onChange = (e) => {
    setContent(e);
  };
  const [cookies] = useCookies();

  const onImageUpload = async (files) => {
    const formData = new FormData();
    formData.append("img", files[0]);
    await axios
      .post(`${ip}/api/img`, formData, {
        headers: {
          Authorization: "Bearer " + cookies["junggam-token"],
        },
      })
      .then((response) => {
        setContent(content + `<img src=${response.data.message}/>`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    // console.log(cookies["junggam-token"]);
  }, []);

  return (
    <ReactSummernote
      value={content}
      options={{
        height: 350,
        minHeight: 350,
        maxHeight: null,
        dialogsInBody: true,
        toolbar: [
          // ["style", ["style"]],
          ["font", ["bold", "underline"]], //"clear"
          ["fontsize", ["fontsize"]],
          ["fontname", ["fontname"]],
          ["para", ["ul", "ol", "paragraph"]],
          ["table", ["table"]],
          ["insert", ["picture"]], //link file
          ["view", ["fullscreen", "codeview"]],
        ],
      }}
      onChange={onChange}
      onImageUpload={onImageUpload}
      // onFileUpload={onFileUpload}
    />
  );
};

export default TextEditor;
