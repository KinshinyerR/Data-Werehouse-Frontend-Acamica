import React, { useEffect, useState } from "react";
import Plantilla from "../../componentes/Plantilla/Plantilla";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("x-auth-token", token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://data-werehouse-kr.herokuapp.com/companies/all",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setCompanies(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  }, []);

  const handleOnClick = (company) => {
    console.log(company);
  };
  return (
    <>
      <Plantilla title="Compañias" />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">{<input type="checkbox" />}</th>
            <th scope="col">Nombre</th>
            <th scope="col">País</th>
            <th scope="col">Dirección</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.email} onClick={() => handleOnClick(company)}>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>{company.name}</td>
              <td>{company.cityId}</td>
              <td>{company.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Companies;
