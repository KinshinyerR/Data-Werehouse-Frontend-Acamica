import React, { useState, useEffect } from "react";
import Plantilla from "../../componentes/Plantilla/Plantilla";
import axios from "axios";
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
      .then((response) => response.text())
      .then((result) => setContacts(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  }, []);
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
            <tr key={contact.email}/*onClick={() => handleOnClick(user)}*/>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>{contact.name}</td>
              <td>{contact.countryId}</td>
              <td>{contact.companyId}</td>
              <td>{contact.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Contacts;
