import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Redirect } from "react-router-dom";

const Plantilla = ({ title, handleOnAdd }) => {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-between align-items-center my-2 mx-4 border-bottom border-info border-3 ">
        <h1 className="my-3">{title}</h1>
        <button
          className="btn btn-outline-warning text-dark"
          onClick={handleOnAdd}
        >
          Añadir {title}
        </button>
      </div>
    </>
  );
};

export default Plantilla;
