import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Plantilla from "../../componentes/Plantilla/Plantilla";
import Modal from "../../componentes/Modal/Modal";
import UserForm from "./UserForm";
import { UserDelete } from "./UserDelete";
import { getUsers } from "../../lib/services/users/users.service";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(null);
  const [status, setStatus] = useState("loading");

  const handleOnClose = () => {
    setModal(null);
    getUsers()
      .then((result) => setUsers(result))
      .catch((error) => console.log({ error }));
  };

  const handleOnDelete = (e, user) => {
    e.stopPropagation();
    setModal(
      <Modal
        show
        title="Eliminar"
        body={
          <UserDelete
            user={user}
            title="Eliminar"
            handleOnClose={handleOnClose}
          />
        }
        onClose={handleOnClose}
      />
    );
  };
  const handleOnClick = (user) => {
    setModal(
      <Modal
        show
        title={user ? "Actualizar Usuario" : "Añadir Usuario"}
        body={
          <UserForm
            user={user}
            title={user ? "Actualizar" : "Añadir"}
            handleOnClose={handleOnClose}
          />
        }
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
      .catch((error) => console.log({ error }));
  }, []);

  return status === "loading" ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <Plantilla title="Usuarios" handleOnAdd={() => handleOnClick()} />
      <table className="table table-hover  mx-4">
        <thead>
          <tr>
            <th scope="col">Perfil</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.email} onClick={() => handleOnClick(user)}>
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
