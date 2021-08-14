import React, { useState, useEffect } from "react";
import { getCompanies } from "../../lib/services/companies/companies.service";
import { registerContact } from "../../lib/services/contacts/contacts.service";

import {
  getRegions,
  getCountries,
  getCities,
} from "../../lib/services/regions/region.service";

const ContactForm = ({ contact, title }) => {
  const [compamies, setCompamies] = useState([]);
  const [regions, setRegions] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const [formData, setFormData] = useState({
    name: contact ? contact.name : "",
    surname: contact ? contact.surname : "",
    position: contact ? contact.position : "",
    email: contact ? contact.email : "",
    companyId: contact ? contact.companyId.name : "",
    regionId: contact ? contact.regionId : "",
    countryId: contact ? contact.countryId.name : "",
    cityId: contact ? contact.cityId : "",
    address: contact ? contact.address : "",
    interest: contact ? contact.interest : 0,
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

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnChangeChannel = (e, index) => {
    const newChannels = [...channels];

    newChannels[index] = {
      ...newChannels[index],
      [e.target.name]: e.target.value,
    };

    setFormData({ ...formData, channels: newChannels });
  };

  const handleOnDeleteChannel = (index) => {
    const newChannels = [...channels];

    newChannels.splice(index, 1);

    setFormData({ ...formData, channels: newChannels });
  };

  const handleOnAddChannel = () => {
    setFormData({
      ...formData,
      channels: [
        ...channels,
        {
          channelName: "",
          account: "",
          preference: "",
        },
      ],
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    registerContact(formData).then((result) => console.log(result));
  };

  useEffect(() => {
    getCompanies().then((result) => setCompamies(result));
    getRegions().then((result) => setRegions(result));
    getCountries().then((result) => setCountries(result));
    getCities().then((result) => setCities(result));
  }, []);

  return (
    <form onSubmit={handleOnSubmit} className="container ">
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
        <label htmlFor="surname" className="col-sm-2 col-form-label">
          Apellido
        </label>
        <div className="col-md-6">
          <input
            onChange={handleOnChange}
            type="text"
            id="surname"
            name="surname"
            value={surname}
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
            type="email"
            id="email"
            name="email"
            value={email}
            className="form-control"
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="position" className="col-sm-2 col-form-label">
          Cargo
        </label>
        <div className="col-md-6">
          <input
            onChange={handleOnChange}
            type="text"
            id="position"
            name="position"
            value={position}
            className="form-control"
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="companyId" className="col-sm-2 col-form-label">
          Compañia
        </label>
        <div className="col-md-6">
          <select
            onChange={handleOnChange}
            type="text"
            id="companyId"
            name="companyId"
            value={companyId}
            className="form-control"
          >
            <option value="">---</option>
            {compamies.map((company) => (
              <option key={company._id} value={company._id}>
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
        <div className="col-md-6">
          <select
            onChange={handleOnChange}
            type="text"
            id="regionId"
            name="regionId"
            value={regionId}
            className="form-control"
          >
            <option value="">---</option>
            {regions.map((region) => (
              <option key={region._id} value={region._id}>
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
        <div className="col-md-6">
          <select
            onChange={handleOnChange}
            type="text"
            id="countryId"
            name="countryId"
            value={countryId}
            className="form-control"
          >
            <option value="">---</option>
            {countries.map((country) => (
              <option key={country._id} value={country._id}>
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
        <label htmlFor="interest" className="col-sm-2 col-form-label">
          Interés
        </label>
        <div className="col-md-6">
          <input
            onChange={handleOnChange}
            type="number"
            id="interest"
            name="interest"
            value={interest}
            className="form-control"
            min="10"
            max="100"
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="channels" className="col-sm-2 col-form-label">
          Canales
        </label>
        <div className="col-md-6">
          <button
            type="button"
            className="btn btn-outline-warning text-dark"
            onClick={handleOnAddChannel}
          >
            Agregar Canal
          </button>
        </div>
      </div>
      {channels.map((channel, index) => (
        <div
          className="mx-5 p-3 mt-3 border border-warning rounded"
          key={`channel-${index}`}
        >
          <div className="mb-3 row">
            <label
              htmlFor={`channelName-${index}`}
              className="col-sm-2 col-form-label me-5"
            >
              Canal
            </label>
            <div className="col-md-6">
              <select
                onChange={(e) => handleOnChangeChannel(e, index)}
                type="text"
                id={`channelName-${index}`}
                name="channelName"
                value={channel.channelName}
                className="form-control"
              >
                <option value="">---</option>
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Llamada">Llamada</option>
                <option value="Mensaje">Mensaje</option>
              </select>
            </div>
          </div>

          <div className="mb-3 row">
            <label
              htmlFor={`channelAccount-${index}`}
              className="col-sm-2 col-form-label me-5"
            >
              Account
            </label>
            <div className="col-md-6">
              <input
                onChange={(e) => handleOnChangeChannel(e, index)}
                type="text"
                id={`channelAccount-${index}`}
                name="account"
                value={channel.account}
                className="form-control"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label
              htmlFor={`channelPreference-${index}`}
              className="col-sm-2 col-form-label me-5"
            >
              Preferencia
            </label>
            <div className="col-md-6">
              <select
                onChange={(e) => handleOnChangeChannel(e, index)}
                type="text"
                id={`channelPreference-${index}`}
                name="preference"
                value={channel.preference}
                className="form-control"
              >
                <option value="">---</option>
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
              </select>
            </div>
          </div>
          <button
            onClick={() => handleOnDeleteChannel(index)}
            type="button"
            className="btn btn-outline-danger mx-auto"
          >
            Eliminar Canal
          </button>
        </div>
      ))}

      <button
        type="submit"
        className="btn btn-outline-warning text-dark my-5 mx-0"
      >
        {title}
      </button>
    </form>
  );
};

export default ContactForm;
