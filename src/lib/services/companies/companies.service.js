import axios from "axios";
import { getHeaders } from "../../utils/getHeaders";

const api = process.env.REACT_APP_API;

export const registerCompany = (data) =>
  axios
    .post(`${api}/companies/register`, data, {
      headers: getHeaders(),
    })
    .then(({ data }) => data);

export const getCompanies = () =>
  axios(`${api}/companies/all`, {
    headers: getHeaders(),
  }).then(({ data }) => data);

export const updateCompany = (data) =>
  axios
    .put(`${api}/companies/update`, data, {
      headers: getHeaders(),
    })
    .then(({ data }) => data);

export const deleteCompany = (data) =>
  axios
    .delete(`${api}/companies/delete`, { headers: getHeaders(), data })
    .then(({ data }) => data);
