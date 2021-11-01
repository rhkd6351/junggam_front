import axios, { Axios } from "axios";
import React from "react";
import { ip } from "../config/config";

class AxiosApi {
  baseUrl = ip;

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
