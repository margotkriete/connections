import axios from "axios";
import qs from "qs";

export const client = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

export const checkGuess = (params) => {
  client
    .get("/guess", { params: params })
    .then(function (response) {
      console.log("success", response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return { error: "blah" };
    })
    .finally(function () {});
};
