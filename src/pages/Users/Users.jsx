import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Plantilla from "../../componentes/Plantilla/Plantilla";
import Modal from "../../componentes/Modal/Modal";
import UserForm from "./UserForm";
import { UserDelete } from "./UserDelete";
import { getUsers, deleteUser } from "../../lib/services/users/users.service";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(null);
  const [status, setStatus] = useState("loading");

  const handleOnClose = () => {
    setModal(null);
    getUsers().then((result) => setUsers(result));
  };

  const handleOnDelete = (e, user) => {
    e.stopPropagation();
    setModal(
      <Modal
        show
        title="Eliminar"
        body={<UserDelete user={user} title="Eliminar" />}
        onClose={handleOnClose}
      />
    );
  };
  const handleOnClick = (user) => {
    setModal(
      <Modal
        show
        title={user ? "Actualizar Usuario" : "Añadir Usuario"}
        body={<UserForm user={user} title={user ? "Actualizar" : "Añadir"} />}
        onClose={handleOnClose}
      />
    );
  };

  useEffect(() => {
    getUsers()
      .then((result) => {
        if (result) {
          setUsers(result);
          setStatus("exitoso");
        }
      })
      .catch(() => setStatus("Error"));
  }, []);

  if (status === "Error") {
    return <Redirect to="/" />;
  }

  return status === "loading" ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <Plantilla title="Usuarios" handleOnAdd={() => handleOnClick()} />
      <table className="table table-hover  mx-4">
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
          {users &&
            users.map((user) => (
              <tr key={user.email} onClick={() => handleOnClick(user)}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{user.perfil}</td>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={(e) => handleOnDelete(e, user)}
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

export default Users;
