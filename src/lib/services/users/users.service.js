export const getUsers = () => {
  const token = localStorage.getItem("token");
  const myHeaders = new Headers();
  myHeaders.append("x-auth-token", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "https://data-werehouse-kr.herokuapp.com/users/all",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", { error }));
};

export const registerUser = (data) => {
  const token = localStorage.getItem("token");
  const myHeaders = new Headers();
  myHeaders.append("x-auth-token", token);
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  };

  return fetch(
    "https://data-werehouse-kr.herokuapp.com/users/register",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", { error }));
};

export const deleteUser = (data) => {
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
    "https://data-werehouse-kr.herokuapp.com/users/delete",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};
