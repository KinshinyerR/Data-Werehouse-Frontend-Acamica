import React, { useState } from "react";
import Plantilla from "../../componentes/Plantilla/Plantilla";
import { registerUser } from "../../lib/services/users/users.service";

const UserForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    perfil: "basic",
    password: "",
  });

  const { nombre, apellido, email, perfil, password } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then((result) => console.log(result));
  };

  return (
    <>
      <Plantilla title="Usuario" />
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            onChange={handleOnChange}
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
          />
        </div>
        <div>
          <label htmlFor="apellido">apellido</label>
          <input
            onChange={handleOnChange}
            type="text"
            id="apellido"
            name="apellido"
            value={apellido}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            onChange={handleOnChange}
            type="email"
            id="email"
            name="email"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="perfil">perfil</label>
          <select
            onChange={handleOnChange}
            type="text"
            id="perfil"
            name="perfil"
            value={perfil}
          >
            <option value="basic">basic</option>
            <option value="admin">admin</option>
          </select>
        </div>
        <div>
          <label htmlFor="contraseña">contraseña</label>
          <input
            onChange={handleOnChange}
            type="password"
            id="password"
            name="password"
            value={password}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </>
  );
};

export default UserForm;
