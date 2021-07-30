import React from "react";
import Navbar from "../Navbar/Navbar";

const Plantilla = ({ title }) => {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-between align-items-center my-2 mx-4 border-bottom border-info border-3 ">
        <h1 className="my-3">{title}</h1>
        <button className="btn btn-outline-warning text-dark">
          Añadir {title}
        </button>
      </div>
    </>
  );
};

export default Plantilla;
