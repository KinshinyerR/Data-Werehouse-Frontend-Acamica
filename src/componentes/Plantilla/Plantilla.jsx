import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Redirect } from "react-router-dom";

const Plantilla = ({ title }) => {
  const [page, setPage] = useState("");
  const [next, setNext] = useState();

  const handleOnItem = (e) => {
    e.preventDefault();
    console.log(title);
    if (title === "Contactos") {
      setPage("contactos/formulario");
      setNext(true);
    }
    if (title === "Compañias") {
      setPage("compañias/formulario");
      setNext(true);
    }
    if (title === "Usuarios") {
      setPage("usuarios/formulario");
      setNext(true);
    }
  };

  if (next) {
    return <Redirect to={page} />;
  }

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-between align-items-center my-2 mx-4 border-bottom border-info border-3 ">
        <h1 className="my-3">{title}</h1>
        <button
          className="btn btn-outline-warning text-dark"
          onClick={handleOnItem}
        >
          Añadir {title}
        </button>
      </div>
    </>
  );
};

export default Plantilla;
