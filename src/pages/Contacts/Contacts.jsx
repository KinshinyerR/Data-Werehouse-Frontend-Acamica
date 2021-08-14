import React, { useState, useEffect } from "react";
import Plantilla from "../../componentes/Plantilla/Plantilla";
import Modal from "../../componentes/Modal/Modal";
import ContactForm from "./ContactForm";
import { deleteContact } from "../../lib/services/contacts/contacts.service";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [modal, setModal] = useState(null);

  const handleOnClose = () => {
    setModal(null);
  };

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

  const handleOnDelete = (e, contact) => {
    e.stopPropagation();
    console.log(contact.email);
    const accept = window.confirm(
      `¿Esta seguro que desea eliminar al contacto ${contact.name}?`
    );
    if (accept) deleteContact(contact.email).then((result) => alert(result));
    else {
      alert("Contacto no eliminado");
    }
  };

  const handleOnClick = (contact) => {
    setModal(
      <Modal
        show
        title={contact ? "Actualizar Contacto" : "Añadir Contacto"}
        body={
          <ContactForm
            contact={contact}
            title={contact ? "Actualizar" : "Añadir"}
          />
        }
        onClose={handleOnClose}
      />
    );
  };

  return (
    <>
      <Plantilla title="Contactos" handleOnAdd={() => handleOnClick()} />
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
            <tr key={contact.email} onClick={() => handleOnClick(contact)}>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>{contact.name}</td>
              <td>{contact.countryId.name}</td>
              <td>{contact.companyId.name}</td>
              <td>{contact.position}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={(e) => handleOnDelete(e, contact)}
                >
                  <i className="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modal}
    </>
  );
};

export default Contacts;
