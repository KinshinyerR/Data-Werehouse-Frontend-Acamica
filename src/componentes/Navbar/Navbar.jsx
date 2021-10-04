import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../images/dt1.png";
import { getProfile } from "../../lib/services/users/users.service";

const Navbar = () => {
  const [profile, setProfile] = useState({});
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  useEffect(() => {
    getProfile().then((result) => setProfile(result));
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">
            <img
              className="rounded"
              src={Logo}
              alt="Logo"
              width="60"
              height="60"
            />
          </a>
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  name="contactos"
                  id="contactos"
                  to="/contactos"
                >
                  <i id="contactos" className="far fa-address-book"></i>
                  Contactos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  name="compañias"
                  to="/compañias"
                  id="compañias"
                >
                  <i id="compañias" className="far fa-building"></i> Compañias
                </Link>
              </li>
              {profile.perfil === "admin" ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    name="usuarios"
                    to="/usuarios"
                    id="usuarios"
                  >
                    <i id="usuarios" className="far fa-user"></i> Usuarios
                  </Link>
                </li>
              ) : null}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  name="region"
                  to="/region"
                  id="region"
                >
                  <i id="region" className="fas fa-globe"></i> Region/Ciudad
                </Link>
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
