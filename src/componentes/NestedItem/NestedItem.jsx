import React, { useState } from "react";
import "./NestedItem.css";

export const NestedItem = ({ list, handleOnEdit, handleOnDelete }) => {
  const [expanded, setExpanded] = useState(true);

  const handleOnExpand = (e) => {
    setExpanded(!expanded);
  };

  return (
    <ul>
      {list &&
        list.map((item) => (
          <li key={item.name}>
            <div className="item-content">
              <div>
                {item.children ? (
                  <button className="btn text-dark" onClick={handleOnExpand}>
                    {expanded ? (
                      <i className="fas fa-chevron-up"></i>
                    ) : (
                      <i className="fas fa-chevron-down"></i>
                    )}
                  </button>
                ) : null}
                {item.name}
                <button
                  className="btn btn-outline-warning ms-5 text-dark"
                  onClick={() => handleOnEdit(item)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-outline-warning text-dark"
                  onClick={() => handleOnDelete(item)}
                >
                  Eliminar
                </button>
              </div>
              {item.children ? (
                <button className="btn btn-outline-warning text-dark">
                  Añadir {item.childrenName}
                </button>
              ) : null}
            </div>
            {expanded && (
              <NestedItem
                list={item.children}
                handleOnEdit={handleOnEdit}
                handleOnDelete={handleOnDelete}
              />
            )}
          </li>
        ))}
    </ul>
  );
};

export default NestedItem;
