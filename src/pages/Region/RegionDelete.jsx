import React, { useState } from "react";
import { deleteRegion } from "../../lib/services/regions/region.service";

export const RegionDelete = ({ item, title, tipo }) => {
  let nameItem = "";

  if (tipo === "Region") {
    nameItem = "la región";
  } else if (tipo === "Country") {
    nameItem = "el país";
  } else {
    nameItem = "la ciudad";
  }

  const [formData, setFormData] = useState({
    id: item ? item._id : undefined,
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    deleteRegion(tipo, formData).then((result) => console.log(result));
  };

  return (
    <form onSubmit={handleOnSubmit} className="container">
      <div className="mb-3 row">
        <h3>
          ¿Esta seguro que desea eliminar {nameItem} {item.name} ?
        </h3>
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
