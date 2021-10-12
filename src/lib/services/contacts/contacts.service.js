import axios from "axios";

const api = process.env.REACT_APP_API;

function getHeaders() {
  const token = localStorage.getItem("token");

  return {
    "x-auth-token": token,
  };
}

export const registerContact = (data) => {
  const token = localStorage.getItem("token");
  const myHeaders = new Headers();
  myHeaders.append("x-auth-token", token);
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  };

  console.log(JSON.stringify(data));

  return fetch(`${api}/contacts/register`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", { error }));
};

export const getContacts = (search) => {
  const token = localStorage.getItem("token");

  const myHeaders = new Headers();
  myHeaders.append("x-auth-token", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    `https://data-werehouse-kr.herokuapp.com/contacts/all?search=${search}`,
    requestOptions
  ).then((response) => response.json());
};

export const updateContact = (data) =>
  axios.put(`${api}/contacts/update`, data, { headers: getHeaders() });

export const deleteContact = (data) => {
  const token = localStorage.getItem("token");
  const myHeaders = new Headers();
  myHeaders.append("x-auth-token", token);
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: JSON.stringify({
      email: data,
    }),
    redirect: "follow",
  };

  return fetch(`${api}/contacts/delete`, requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};
