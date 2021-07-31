import React, { useEffect, useState } from "react";
import { getUsers } from "../../lib/services/users/users.service";
import Plantilla from "../../componentes/Plantilla/Plantilla";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((result) => setUsers(result));
  }, []);

  const handleOnClick = (user) => {
    console.log(user);
  };

  return (
    <>
      <Plantilla title="Usuario" />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">{<input type="checkbox" />}</th>
            <th scope="col">Perfil</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email} onClick={() => handleOnClick(user)}>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>{user.perfil}</td>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
