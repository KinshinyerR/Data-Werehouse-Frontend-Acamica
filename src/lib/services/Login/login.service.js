import axios from "axios";

const api = process.env.REACT_APP_API;
export const login = (data) => {
  return axios.post(`${api}/users/login`, data).then((result) => result.data);
};
