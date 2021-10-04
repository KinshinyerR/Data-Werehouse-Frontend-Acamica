import React from "react";

const Plantilla = ({ title, handleOnAdd }) => {
  return (
    <>
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
