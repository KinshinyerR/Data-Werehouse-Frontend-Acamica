import axios from "axios";

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

export const registerRegion = (data) => {
  const token = localStorage.getItem("token");

  const config = {
    method: "post",
    url: "https://data-werehouse-kr.herokuapp.com/regions/addRegion",
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

export const updateRegion = (data) => {
  const token = localStorage.getItem("token");

  const datos = JSON.stringify({
    id: data.regionId,
    name: data.name,
  });

  const config = {
    method: "put",
    url: "https://data-werehouse-kr.herokuapp.com/regions/updateRegion",
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json",
    },
    data: datos,
  };

  return axios(config)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch((error) => console.log("error", { error }));
};
