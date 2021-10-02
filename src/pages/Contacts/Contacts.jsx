import React, { useState, useEffect } from "react";
import Plantilla from "../../componentes/Plantilla/Plantilla";
import Modal from "../../componentes/Modal/Modal";
import ContactForm from "./ContactForm";
import { ContactDelete } from "./ContactDelete";
import ProgressBar from "../../componentes/ProgressBar/ProgressBar";
import { getContacts } from "../../lib/services/contacts/contacts.service";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [modal, setModal] = useState(null);
  const [query, setQuery] = useState("");

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  const handleOnClose = () => {
    setModal(null);
    getContacts(query)
      .then((result) => setContacts(result))
      .catch((error) => console.log("error desde contact.jsx", error));
  };

  const handleOnDelete = (e, contact) => {
    e.stopPropagation();
    setModal(
      <Modal
        show
        title="Eliminar"
        body={<ContactDelete contact={contact} title="Eliminar" />}
        onClose={handleOnClose}
      />
    );
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

  useEffect(() => {
    getContacts(query)
      .then((result) => setContacts(result))
      .catch((error) => console.log("error desde contact.jsx", error));
  }, [query]);

  return (
    <>
      <Plantilla title="Contactos" handleOnAdd={() => handleOnClick()} />
      <div className="d-flex align-items-center m-4">
        <div className="form-floating col-md-3">
          <input
            className="form-control"
            id="search"
            type="text"
            name="search"
            placeholder="Search"
            value={query}
            onChange={handleOnChange}
          />
          <label htmlFor="floatingInput">Buscar</label>
        </div>
      </div>

      <table className="table table-striped table-hover mx-4">
        <thead>
          <tr>
            <th scope="col">{<input type="checkbox" />}</th>
            <th scope="col">Nombre</th>
            <th scope="col">País</th>
            <th scope="col">Compañia</th>
            <th scope="col">Cargo</th>
            <th scope="col">Interes</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((contact) => (
              <tr key={contact.email} onClick={() => handleOnClick(contact)}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{contact.name}</td>
                <td>{contact.countryId.name}</td>
                <td>{contact.companyId.name}</td>
                <td>{contact.position}</td>
                <td>
                  <ProgressBar progress={contact.interest} />
                </td>
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
