import axios from "axios";

export const login = (data) => {
  return axios
    .post("https://data-werehouse-kr.herokuapp.com/users/login", data)
    .then((result) => result.data);
};
