export const registerCompany = (data) => {
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
    "https://data-werehouse-kr.herokuapp.com/companies/register",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const getCompanies = () => {
  const token = localStorage.getItem("token");
  const myHeaders = new Headers();
  myHeaders.append("x-auth-token", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "https://data-werehouse-kr.herokuapp.com/companies/all",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};
