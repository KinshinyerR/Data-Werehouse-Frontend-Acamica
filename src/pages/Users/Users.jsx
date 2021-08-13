import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../lib/services/users/users.service";
import Plantilla from "../../componentes/Plantilla/Plantilla";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((result) => setUsers(result));
  }, [users]);

  const handleOnClick = (e, user) => {
    if (e.target.localName === "i" || e.target.localName === "button") {
      console.log(user.email);
      const accept = window.confirm(
        `¿Esta seguro que desea eliminar al usuario ${user.nombre}?`
      );
      if (accept) deleteUser(user.email).then((result) => alert(result));
      else {
        alert("Usuario no eliminado");
      }
    }
  };

  return (
    <>
      <Plantilla title="Usuarios" />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">{<input type="checkbox" />}</th>
            <th scope="col">Perfil</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email} onClick={(e) => handleOnClick(e, user)}>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>{user.perfil}</td>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.email}</td>
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

export default Users;
