import axios from "axios";

export const apiURL =
  import.meta.env.REACT_APP_API_URL || "http://localhost:8080/";

export const instance = axios.create({
  baseURL: apiURL,
});

export const getResponseData = (resp) => resp.data;

export const catchError = (error) => {
  if (error.response) {
    return error.response.data;
  } else if (error.request) {
    return error.request;
  } else {
    return error.message;
  }
};
