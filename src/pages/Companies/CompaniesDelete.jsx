import React from "react";
import { deleteCompany } from "../../lib/services/companies/companies.service";

export const CompaniesDelete = ({ company, title }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    deleteCompany(company.email).then((result) => console.log(result));
  };
  return (
    <form onSubmit={handleOnSubmit} className="container">
      <div className="mb-3 row">
        <h3>¿Esta seguro que desea eliminar la compañia {company.name}?</h3>
      </div>

      <button
        type="submit"
        className="btn btn btn-outline-danger text-dark my-5 mx-0"
      >
        {title}
      </button>
    </form>
  );
};
