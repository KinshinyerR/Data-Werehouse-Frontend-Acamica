import React, { useState, useEffect } from "react";
import Plantilla from "../../componentes/Plantilla/Plantilla";
import Modal from "../../componentes/Modal/Modal";
import ContactForm from "./ContactForm";
import { ContactDelete } from "./ContactDelete";
import { ContactsDeleteModal } from "./ContactsDeleteModal";
import ProgressBar from "../../componentes/ProgressBar/ProgressBar";
import { getContacts } from "../../lib/services/contacts/contacts.service";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [modal, setModal] = useState(null);
  const [query, setQuery] = useState("");
  const [checkAll, setCheckAll] = useState(false);

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

  const handleOnDeleteSelect = () => {
    const contactsToDelete = contacts.filter((contact) => contact.check);
    console.log(contactsToDelete);
    setModal(
      <Modal
        show
        title="Eliminar"
        body={
          <ContactsDeleteModal
            contacts={contactsToDelete}
            handleOnClose={handleOnClose}
          />
        }
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

  const handleOnChangeItem = (id) => {
    const newContacts = contacts.map((contact) => {
      if (contact._id === id) {
        contact.check = !contact.check;
      }
      return contact;
    });
    setContacts(newContacts);
  };

  const handleOnCheckAll = () => {
    const newContacts = contacts.map((contact) => {
      contact.check = !checkAll;
      return contact;
    });
    setContacts(newContacts);
    setCheckAll(!checkAll);
  };

  useEffect(() => {
    getContacts(query)
      .then((result) =>
        setContacts(result.map((item) => ({ ...item, check: false })))
      )
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
            <th scope="col">
              {
                <input
                  type="checkbox"
                  onChange={handleOnCheckAll}
                  defaultChecked={checkAll}
                />
              }
            </th>
            <th scope="col">Nombre</th>
            <th scope="col">País</th>
            <th scope="col">Compañia</th>
            <th scope="col">Cargo</th>
            <th scope="col">Interes</th>
            <th scope="col">
              <button
                className="btn btn-outline-danger"
                onClick={handleOnDeleteSelect}
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((contact) => (
              <tr key={contact.email}>
                <th scope="row">
                  <input
                    type="checkbox"
                    defaultChecked={contact.check}
                    onChange={() => handleOnChangeItem(contact._id)}
                  />
                </th>
                <td onClick={() => handleOnClick(contact)}>{contact.name}</td>
                <td onClick={() => handleOnClick(contact)}>
                  {contact.countryId.name}
                </td>
                <td onClick={() => handleOnClick(contact)}>
                  {contact.companyId.name}
                </td>
                <td onClick={() => handleOnClick(contact)}>
                  {contact.position}
                </td>
                <td onClick={() => handleOnClick(contact)}>
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
