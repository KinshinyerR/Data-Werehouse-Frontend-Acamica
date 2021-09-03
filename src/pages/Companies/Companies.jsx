import React, { useEffect, useState } from "react";
import Plantilla from "../../componentes/Plantilla/Plantilla";
import Modal from "../../componentes/Modal/Modal";
import CompaniesForm from "./CompaniesForm";
import {
  deleteCompany,
  getCompanies,
} from "../../lib/services/companies/companies.service";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [modal, setModal] = useState(null);

  const handleOnclose = () => {
    setModal(null);
    getCompanies().then((result) => setCompanies(result));
  };

  const handleOnDelete = (e, company) => {
    e.stopPropagation();
    console.log(company.email);
    const accept = window.confirm(
      `¿Esta seguro que desea eliminar la Compañia ${company.name}?`
    );
    if (accept)
      deleteCompany(company.email).then((result) => {
        alert(result);
        getCompanies().then((result) => setCompanies(result));
      });
    else {
      alert("Compañia no eliminada");
    }
  };

  const handleOnClick = (company) => {
    console.log(company);
    setModal(
      <Modal
        show
        title={company ? "Actualizar Compañia" : "Añadir Compañia"}
        body={
          <CompaniesForm
            company={company}
            title={company ? "Actualizar" : "Añadir"}
          />
        }
        onClose={handleOnclose}
      />
    );
  };

  useEffect(() => {
    getCompanies().then((result) => setCompanies(result));
  }, []);

  return (
    <>
      <Plantilla title="Compañias" handleOnAdd={() => handleOnClick()} />
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
          {companies.map((company) => (
            <tr key={company.email} onClick={() => handleOnClick(company)}>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>{company.name}</td>
              <td>{company.cityId.name}</td>
              <td>{company.address}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={(e) => handleOnDelete(e, company)}
                >
                  <i className="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modal}
    </>
  );
};

export default Companies;
