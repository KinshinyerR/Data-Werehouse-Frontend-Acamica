import React from "react";
import { deleteContact } from "../../lib/services/contacts/contacts.service";

export const ContactsDeleteModal = ({ contacts, handleOnClose }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(contacts);
    contacts.forEach((contact) => {
      deleteContact(contact.email).then((result) => console.log(result));
    });
  };
  return (
    <>
      {/* // <form onSubmit={handleOnSubmit} className="container"> */}
      <div className="mb-3 row">
        <h3>¿Esta seguro que desea eliminar todos los contactos?</h3>
      </div>

      <button
        type="button"
        onClick={handleOnSubmit}
        className="btn btn btn-outline-success text-dark my-5 mx-0"
      >
        Eliminar
      </button>
      <button
        type="button"
        onClick={handleOnClose}
        className="btn btn btn-outline-danger text-dark my-5 mx-0"
      >
        No Eliminar
      </button>
      {/* // </form> */}
    </>
  );
};
