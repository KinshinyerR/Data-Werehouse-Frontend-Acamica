import axios from "axios";
import { getHeaders } from "../../utils/getHeaders";

const api = process.env.REACT_APP_API;

export const getProfile = () =>
  axios(`${api}/users/profile`, { headers: getHeaders() }).then(
    ({ data }) => data
  );

export const getUsers = () =>
  axios("https://data-werehouse-kr.herokuapp.com/users/all", {
    headers: getHeaders(),
  }).then(({ data }) => data);

export const registerUser = (data) =>
  axios
    .post("https://data-werehouse-kr.herokuapp.com/users/register", data, {
      headers: getHeaders(),
    })
    .then(({ data }) => data);

export const updateUser = (data) =>
  axios
    .put("https://data-werehouse-kr.herokuapp.com/users/update", data, {
      headers: getHeaders(),
    })
    .then(({ data }) => data);

export const deleteUser = (data) =>
  axios
    .delete("https://data-werehouse-kr.herokuapp.com/users/delete", {
      headers: getHeaders(),
      data,
    })
    .then(({ data }) => data);
