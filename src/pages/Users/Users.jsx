import React, { useEffect, useState } from "react";
import Plantilla from "../../componentes/Plantilla/Plantilla";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("x-auth-token", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://data-werehouse-kr.herokuapp.com/users/all", requestOptions)
      .then((response) => response.text())
      .then((result) => setUsers(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  }, []);

  const handleOnClick = (user) => {
    console.log(user);
  };

  return (
    <>
      <Plantilla title="Usuarios"/>
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
