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

  return fetch(
    "https://data-werehouse-kr.herokuapp.com/contacts/register",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", { error }));
};

export const getContacts = () => {
  const token = localStorage.getItem("token");

  const myHeaders = new Headers();
  myHeaders.append("x-auth-token", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "https://data-werehouse-kr.herokuapp.com/contacts/all",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", { error }));
};

export const updateContact = (data) => {
  const token = localStorage.getItem("token");
  const myHeaders = new Headers();
  myHeaders.append("x-auth-token", token);
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  };

  return fetch(
    "https://data-werehouse-kr.herokuapp.com/contacts/update",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

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

  return fetch(
    "https://data-werehouse-kr.herokuapp.com/contacts/delete",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};
