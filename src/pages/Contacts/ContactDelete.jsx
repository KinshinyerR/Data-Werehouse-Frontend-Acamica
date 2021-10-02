import React from "react";
import { deleteContact } from "../../lib/services/contacts/contacts.service";

export const ContactDelete = ({ contact, title }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    deleteContact(contact.email).then((result) => console.log(result));
  };
  return (
    <form onSubmit={handleOnSubmit} className="container">
      <div className="mb-3 row">
        <h3>¿Esta seguro que desea eliminar el contacto {contact.name}?</h3>
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
