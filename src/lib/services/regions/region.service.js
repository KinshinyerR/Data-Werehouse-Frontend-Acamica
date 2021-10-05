import axios from "axios";
import { getHeaders } from "../../utils/getHeaders";

export const getRegions = () => {
  const token = localStorage.getItem("token");
  const myHeaders = new Headers();
  myHeaders.append("x-auth-token", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "https://data-werehouse-kr.herokuapp.com/regions/allRegions",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const getCountries = () => {
  const token = localStorage.getItem("token");
  const myHeaders = new Headers();
  myHeaders.append("x-auth-token", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "https://data-werehouse-kr.herokuapp.com/regions/allCountries",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const getCities = () => {
  const token = localStorage.getItem("token");
  const myHeaders = new Headers();
  myHeaders.append("x-auth-token", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "https://data-werehouse-kr.herokuapp.com/regions/allCities",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const registerRegion = (tipo, data) => {
  const token = localStorage.getItem("token");

  const config = {
    method: "post",
    url: `https://data-werehouse-kr.herokuapp.com/regions/add${tipo}`,
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => console.log("error", { error }));
};

export const updateRegion = (tipo, data) => {
  return axios
    .put(
      `https://data-werehouse-kr.herokuapp.com/regions/update${tipo}`,
      data,
      { headers: getHeaders() }
    )
    .then(({ data }) => data);
};

export const deleteRegion = (tipo, data) => {
  return axios
    .delete(`https://data-werehouse-kr.herokuapp.com/regions/delete${tipo}`, {
      headers: getHeaders(),
      data: data,
    })
    .then(({ data }) => data);
};

export const allRegions = () => {
  return axios
    .get("https://data-werehouse-kr.herokuapp.com/regions/all", {
      headers: getHeaders(),
    })
    .then(({ data }) => {
      const newRegion = data;
      newRegion.map((r) => {
        r.childrenName = "País";
        r.children = r.countries;
        r.children.map((c) => {
          c.childrenName = "Ciudad";
          c.children = c.cities;
        });
      });
      return newRegion;
    });
};
