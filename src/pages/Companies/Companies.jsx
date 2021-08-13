import React, { useEffect, useState } from "react";
import Plantilla from "../../componentes/Plantilla/Plantilla";
import { deleteCompany } from "../../lib/services/companies/companies.service";

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
      .then((response) => response.json())
      .then((result) => setCompanies(result))
      .catch((error) => console.log("error", { error }));
  }, [companies]);

  const handleOnClick = (e, company) => {
    if (e.target.localName === "i" || e.target.localName === "button") {
      console.log(company.email);
      const accept = window.confirm(
        `¿Esta seguro que desea eliminar la Compañia ${company.name}?`
      );
      if (accept) deleteCompany(company.email).then((result) => alert(result));
      else {
        alert("Compañia no eliminada");
      }
    }
  };

  return (
    <>
      <Plantilla title="Compañias" />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">Nombre</th>
            <th scope="col">País</th>
            <th scope="col">Dirección</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {companies.length > 0 &&
            companies.map((company) => (
              <tr
                key={company.email}
                onClick={(e) => handleOnClick(e, company)}
              >
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{company.name}</td>
                <td>{company.cityId.name}</td>
                <td>{company.address}</td>
                <td>
                  <button className="btn btn-outline-danger">
                    <i className="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Companies;
