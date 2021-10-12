import axios from "axios";
import { getHeaders } from "../../utils/getHeaders";

const api = process.env.REACT_APP_API;

export const registerContact = (data) =>
  axios
    .post(`${api}/contacts/register`, data, {
      headers: getHeaders(),
    })
    .then(({ data }) => data);

export const getContacts = (search) =>
  axios(`${api}/contacts/all?search=${search}`, {
    headers: getHeaders(),
  }).then(({ data }) => data);

export const updateContact = (data) =>
  axios
    .put(`${api}/contacts/update`, data, { headers: getHeaders() })
    .then(({ data }) => data);

export const deleteContact = (data) =>
  axios
    .delete(`${api}/contacts/delete`, { headers: getHeaders(), data })
    .then(({ data }) => data);
