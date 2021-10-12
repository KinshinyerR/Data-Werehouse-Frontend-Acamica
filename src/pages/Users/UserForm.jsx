import React, { useState } from "react";

import {
  registerUser,
  updateUser,
} from "../../lib/services/users/users.service";

const UserForm = ({ user, title, handleOnClose }) => {
  const [formData, setFormData] = useState({
    nombre: user ? user.nombre : "",
    apellido: user ? user.apellido : "",
    email: user ? user.email : "",
    perfil: user ? user.perfil : "basic",
    password: "",
  });

  const { nombre, apellido, email, perfil, password } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    user
      ? updateUser(formData).then((result) => {
          console.log(result);
          handleOnClose()
        }).catch((error) => console.log({error}))
      : registerUser(formData).then((result) => {
          console.log(result);
          handleOnClose()
        }).catch((error) => console.log({error}))
  };

  return (
    <form onSubmit={handleOnSubmit} className="container">
      <div className="mb-3 row">
        <label htmlFor="nombre" className="col-sm-2 col-form-label">
          Nombre
        </label>
        <div className="col-md-6">
          <input
            onChange={handleOnChange}
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="apellido" className="col-sm-2 col-form-label">
          Apellido
        </label>
        <div className="col-md-6">
          <input
            onChange={handleOnChange}
            type="text"
            id="apellido"
            name="apellido"
            value={apellido}
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-md-6">
          <input
            onChange={handleOnChange}
            type="email"
            id="email"
            name="email"
            value={email}
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="perfil" className="col-sm-2 col-form-label">
          Perfil
        </label>
        <div className="col-md-6">
          <select
            onChange={handleOnChange}
            type="text"
            id="perfil"
            name="perfil"
            value={perfil}
            className="form-control"
          >
            <option value="basic">basic</option>
            <option value="admin">admin</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Contraseña
        </label>
        <div className="col-md-6">
          <input
            onChange={handleOnChange}
            type="password"
            id="password"
            name="password"
            value={password}
            className="form-control"
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-outline-warning text-dark my-5 mx-0"
      >
        {title}
      </button>
    </form>
  );
};

export default UserForm;
