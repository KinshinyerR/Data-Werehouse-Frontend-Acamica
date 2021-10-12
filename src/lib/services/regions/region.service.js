import axios from "axios";
import { getHeaders } from "../../utils/getHeaders";

const api = process.env.REACT_APP_API;

export const getRegions = () =>
  axios(`${api}/regions/allRegions`, {
    headers: getHeaders(),
  }).then(({ data }) => data);

export const getCountries = () =>
  axios(`${api}/regions/allCountries`, {
    headers: getHeaders(),
  }).then(({ data }) => data);

export const getCities = () =>
  axios(`${api}/regions/allCities`, {
    headers: getHeaders(),
  }).then(({ data }) => data);

export const registerRegion = (tipo, data) =>
  axios
    .post(`${api}/regions/add${tipo}`, data, {
      headers: getHeaders(),
    })
    .then(({ data }) => data);

export const updateRegion = (tipo, data) => {
  return axios
    .put(`${api}/regions/update${tipo}`, data, { headers: getHeaders() })
    .then(({ data }) => data);
};

export const deleteRegion = (tipo, data) => {
  return axios
    .delete(`${api}/regions/delete${tipo}`, {
      headers: getHeaders(),
      data: data,
    })
    .then(({ data }) => data);
};

export const allRegions = () => {
  return axios
    .get(`${api}/regions/all`, {
      headers: getHeaders(),
    })
    .then(({ data }) => {
      const newRegion = data;
      newRegion.forEach((r) => {
        r.childrenName = "País";
        r.children = r.countries;
        r.children.forEach((c) => {
          c.childrenName = "Ciudad";
          c.children = c.cities;
        });
      });
      return newRegion;
    });
};
