import React, { useState } from "react";
import {
  registerRegion,
  updateRegion,
} from "../../lib/services/regions/region.service";

export const RegionForm = ({ region, title }) => {
  const [formData, setFormData] = useState({
    name: region ? region.name : "",
    regionId: region ? region._id : "",
  });

  const { name } = formData;

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    region
      ? updateRegion(formData).then((result) => console.log(result))
      : registerRegion(formData).then((result) => console.log(result));
  };
  
  return (
    <form onSubmit={handleOnSubmit} className="container">
      <div className="mb-3 row">
        <label htmlFor="nombre" className="col-sm-2 col-form-label">
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

      <button
        type="submit"
        className="btn btn-outline-warning text-dark my-3 mx-0"
      >
        {title}
      </button>
    </form>
  );
};

export default RegionForm;
