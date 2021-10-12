import React from "react";

import { deleteUser } from "../../lib/services/users/users.service";

export const UserDelete = ({ user, title }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    deleteUser({ email: user.email })
      .then((result) => console.log(result))
      .catch((error) => console.log({ error }));
  };
  return (
    <form onSubmit={handleOnSubmit} className="container">
      <div className="mb-3 row">
        <h3>¿Esta seguro que desea eliminar al usuario {user.nombre}?</h3>
      </div>

      <button
        type="submit"
        className="btn btn btn-outline-danger text-dark my-5 mx-0"
      >
        {title}
      </button>
    </form>
  );
};
