import React, { useEffect, useState } from "react";
import Plantilla from "../../componentes/Plantilla/Plantilla";
import Modal from "../../componentes/Modal/Modal";
import CompaniesForm from "./CompaniesForm";
import { CompaniesDelete } from "./CompaniesDelete";
import { getCompanies } from "../../lib/services/companies/companies.service";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [modal, setModal] = useState(null);

  const handleOnclose = () => {
    setModal(null);
    getCompanies().then((result) => setCompanies(result));
  };

  const handleOnDelete = (e, company) => {
    e.stopPropagation();
    setModal(
      <Modal
        show
        title="Eliminar"
        body={
          <CompaniesDelete
            company={company}
            title="Eliminar"
            handleOnclose={handleOnclose}
          />
        }
        onClose={handleOnclose}
      />
    );
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
            handleOnclose={handleOnclose}
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
      <table className="table table-striped table-hover  mx-4">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">País</th>
            <th scope="col">Dirección</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.email} onClick={() => handleOnClick(company)}>
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
