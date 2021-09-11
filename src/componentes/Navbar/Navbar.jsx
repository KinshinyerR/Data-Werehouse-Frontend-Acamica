import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Logo from "../../images/dt1.png";

const Navbar = () => {
  const [page, setPage] = useState("");
  const [next, setNext] = useState();

  const handleOnItem = (e) => {
    e.preventDefault();
    setPage(e.target.id);
    setNext(true);
  };

  const logout = (e) => {
    setPage(e.target.name);
    setNext(true);
    localStorage.removeItem("token");
  };
  if (next) {
    return <Redirect to={page} />;
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">
            <img className="rounded" src={Logo} alt="Logo" width="60" height="60" />
          </a>
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  // onClick={handleOnItem}
                  className="nav-link active"
                  name="contactos"
                  id="contactos"
                  href="/contactos"
                >
                  <i id="contactos" className="far fa-address-book"></i>{" "}
                  Contactos
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={handleOnItem}
                  className="nav-link active"
                  name="compañias"
                  href="#"
                  id="compañias"
                >
                  <i id="compañias" className="far fa-building"></i> Compañias
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={handleOnItem}
                  className="nav-link active"
                  name="usuarios"
                  href="#"
                  id="usuarios"
                >
                  <i id="usuarios" className="far fa-user"></i> Usuarios
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={handleOnItem}
                  className="nav-link active"
                  name="region"
                  href="#"
                  id="region"
                >
                  <i id="region" className="fas fa-globe"></i> Region/Ciudad
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-item">
          <a onClick={logout} className="nav-link active" name="/" href="#">
            <i className="fas fa-sign-out-alt"></i>logout
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
