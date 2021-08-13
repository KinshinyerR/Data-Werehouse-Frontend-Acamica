import React, { useState, useEffect } from "react";
import Plantilla from "../../componentes/Plantilla/Plantilla";
import { deleteContact } from "../../lib/services/contacts/contacts.service";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const myHeaders = new Headers();
    myHeaders.append("x-auth-token", token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://data-werehouse-kr.herokuapp.com/contacts/all",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setContacts(result))
      .catch((error) => console.log("error", error));
  }, [contacts]);

  const handleOnClick = (e, contact) => {
    if (e.target.localName === "i" || e.target.localName === "button") {
      console.log(contact.email);
      const accept = window.confirm(
        `¿Esta seguro que desea eliminar al contacto ${contact.name}?`
      );
      if (accept) deleteContact(contact.email).then((result) => alert(result));
      else {
        alert("Contacto no eliminado");
      }
    }
  };

  return (
    <>
      <Plantilla title="Contactos" />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">{<input type="checkbox" />}</th>
            <th scope="col">Nombre</th>
            <th scope="col">País</th>
            <th scope="col">Compañia</th>
            <th scope="col">Cargo</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.email} onClick={(e) => handleOnClick(e, contact)}>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>{contact.name}</td>
              <td>{contact.countryId.name}</td>
              <td>{contact.companyId.name}</td>
              <td>{contact.position}</td>
              <td>
                <button className="btn btn-outline-danger">
                  <i className="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Contacts;
