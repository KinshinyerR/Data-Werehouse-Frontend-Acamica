import React, { useState, useEffect } from "react";

import {
  registerContact,
  getRegions,
  getCompanies,
  getCountries,
  getCities,
} from "../../lib/services/contacts/contacts.service";

const ContactForm = () => {
  const [compamies, setCompamies] = useState([]);
  const [regions, setRegions] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    position: "",
    email: "",
    companyId: "",
    regionId: "",
    countryId: "",
    cityId: "",
    address: "",
    interest: 0,
    channels: [
      {
        channelName: "",
        account: "",
        preference: "",
      },
    ],
  });

  const {
    name,
    surname,
    position,
    email,
    companyId,
    regionId,
    countryId,
    cityId,
    address,
    interest,
    channels,
  } = formData;

  const [channelName, account, preference] = channels;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // registerContact(formData).then((result) => console.log(result));
    console.log(formData);
  };

  useEffect(() => {
    getCompanies().then((result) => setCompamies(result));
    getRegions().then((result) => setRegions(result));
    getCountries().then((result) => setCountries(result));
    getCities().then((result) => setCities(result));
  }, []);

  return (
    <form
      onSubmit={handleOnSubmit}
      className="border border-warning rounded container p-5 w-50"
    >
      <h1 className="mb-5">Registrar Contacto</h1>
      <div className="ps-5 ms-5">
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Nombre
          </label>
          <div className="col-sm-10">
            <input
              onChange={handleOnChange}
              type="text"
              id="name"
              name="name"
              value={name}
              className="w-50"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="surname" className="col-sm-2 col-form-label">
            Apellido
          </label>
          <div className="col-sm-10">
            <input
              onChange={handleOnChange}
              type="text"
              id="surname"
              name="surname"
              value={surname}
              className="w-50"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onChange={handleOnChange}
              type="email"
              id="email"
              name="email"
              value={email}
              className="w-50"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="position" className="col-sm-2 col-form-label">
            Cargo
          </label>
          <div className="col-sm-10">
            <input
              onChange={handleOnChange}
              type="text"
              id="position"
              name="position"
              value={position}
              className="w-50"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="companyId" className="col-sm-2 col-form-label">
            Compañia
          </label>
          <div className="col-sm-10">
            <select
              onChange={handleOnChange}
              type="text"
              id="companyId"
              name="companyId"
              value={companyId}
              className="w-50"
            >
              <option hidden selected>
                Compañia
              </option>
              {compamies.map((company) => (
                <option key={company.name} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="regionId" className="col-sm-2 col-form-label">
            Región
          </label>
          <div className="col-sm-10">
            <select
              onChange={handleOnChange}
              type="text"
              id="regionId"
              name="regionId"
              value={regionId}
              className="w-50"
            >
              <option hidden selected>
                Región
              </option>
              {regions.map((region) => (
                <option key={regions.name} value={regions.id}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="countryId" className="col-sm-2 col-form-label">
            País
          </label>
          <div className="col-sm-10">
            <select
              onChange={handleOnChange}
              type="text"
              id="countryId"
              name="countryId"
              value={countryId}
              className="w-50"
            >
              <option hidden selected>
                País
              </option>
              {countries.map((country) => (
                <option key={country.name} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="cityId" className="col-sm-2 col-form-label">
            Ciudad
          </label>
          <div className="col-sm-10">
            <select
              onChange={handleOnChange}
              type="text"
              id="cityId"
              name="cityId"
              value={cityId}
              className="w-50"
            >
              <option hidden selected>
                Ciudad
              </option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="address" className="col-sm-2 col-form-label">
            Dirección
          </label>
          <div className="col-sm-10">
            <input
              onChange={handleOnChange}
              type="text"
              id="address"
              name="address"
              value={address}
              className="w-50"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="interest" className="col-sm-2 col-form-label">
            Interés
          </label>
          <div className="col-sm-10">
            <input
              onChange={handleOnChange}
              type="text"
              id="interest"
              name="interest"
              value={interest}
              className="w-50"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="channels" className="col-sm-2 col-form-label">
            Canales
          </label>
          <ul>
            <li>
              <div className="col-sm-10">
                <label
                  htmlFor="channels"
                  className="col-sm-2 col-form-label me-5"
                >
                  Nombre
                </label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  id="channels"
                  name="channels"
                  value={channels}
                  className="w-50"
                />
              </div>
            </li>
            <li>
              <div className="col-sm-10">
                <label
                  htmlFor="channels.account"
                  className="col-sm-2 col-form-label me-5"
                >
                  account
                </label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  id="channels.account"
                  name="channels.account"
                  value={channels.account}
                  className="w-50"
                />
              </div>
            </li>
            <li>
              <div className="col-sm-10">
                <label
                  htmlFor="channels.account"
                  className="col-sm-2 col-form-label me-5"
                >
                  preference
                </label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  id="channels.account"
                  name="channels.account"
                  value={channels.account}
                  className="w-50"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <button type="submit" className="btn btn-outline-warning text-dark mt-5">
        Registrar
      </button>
    </form>
  );
};

export default ContactForm;
