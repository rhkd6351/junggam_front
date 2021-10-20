import axios, { Axios } from "axios";
import React from "react";

class AxiosApi {
  baseUrl = "http://localhost:8080/api";

  getBoardByIdx = (idx) => {
    const url = this.baseUrl + "/board";

    axios
      .get(`${url}/${idx}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default AxiosApi;
