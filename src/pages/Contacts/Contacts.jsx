import React, { useState, useEffect } from "react";
import Plantilla from "../../componentes/Plantilla/Plantilla";

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
  }, []);

  const handleOnClick = (contact) => {
    console.log(contact);
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Contacts;
