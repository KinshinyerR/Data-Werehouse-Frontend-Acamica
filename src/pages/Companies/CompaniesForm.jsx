import React, { useState, useEffect } from "react";

import { registerCompany } from "../../lib/services/companies/companies.service";

import { getCities } from "../../lib/services/regions/region.service";

const CompaniesForm = () => {
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: 0,
    cityId: "",
  });

  const { name, address, email, phone, cityId } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    registerCompany(formData).then((result) => console.log(result));
  };

  useEffect(() => {
    getCities().then((result) => setCities(result));
  }, []);
  return (
    <form
      onSubmit={handleOnSubmit}
      className="border border-warning rounded container p-5"
    >
      <h1 className="mb-5">Registrar Compañia</h1>
      <div className="mb-3 row">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Nombre
        </label>
        <div className="col-md-6">
          <input
            onChange={handleOnChange}
            type="text"
            id="name"
            name="name"
            value={name}
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="address" className="col-sm-2 col-form-label">
          Dirección
        </label>
        <div className="col-md-6">
          <input
            onChange={handleOnChange}
            type="text"
            id="address"
            name="address"
            value={address}
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-md-6">
          <input
            onChange={handleOnChange}
            type="text"
            id="email"
            name="email"
            value={email}
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="phone" className="col-sm-2 col-form-label">
          Teléfono
        </label>
        <div className="col-md-6">
          <input
            onChange={handleOnChange}
            type="number"
            id="phone"
            name="phone"
            value={phone}
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="cityId" className="col-sm-2 col-form-label">
          Ciudad
        </label>
        <div className="col-md-6">
          <select
            onChange={handleOnChange}
            type="text"
            id="cityId"
            name="cityId"
            value={cityId}
            className="form-control"
          >
            <option value="">---</option>
            {cities.map((city) => (
              <option key={city._id} value={city._id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-outline-warning text-dark my-5 mx-0"
      >
        Registrar
      </button>
    </form>
  );
};

export default CompaniesForm;
