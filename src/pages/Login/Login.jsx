import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import img from "../../images/dt1.png";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [logged, setLogged] = useState(false);

  const { email, password } = data;

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
    };

    fetch("https://data-werehouse-kr.herokuapp.com/users/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result);
        setLogged(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  if (logged) {
    return <Redirect to="/usuarios" />;
  }

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="w-50 mx-auto mt-5 pt-5 pb-3 rounded shadow-lg"
    >
      <img
        className="mb-4 rounded"
        src={img}
        alt="Logo"
        width="100"
        height="100"
      />
      <h1 className="h3 mb-5 fw-normal">Please sign in</h1>
      <div className="form-floating w-50 mx-auto">
        <input
          className="form-control"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleOnChange}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>

      <div className="form-floating mt-3 w-50 mx-auto">
        <input
          className="form-control"
          id="password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleOnChange}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className="w-50 mt-3 btn btn-lg btn-primary">Sign in</button>
      {logged ? (
        <p className="mt-3 mb-3 text-muted">
          Usuario y/o contraseña incorrecta
        </p>
      ) : null}
      <p className="mt-3 mb-3 text-muted">Data Werehouse © 2021</p>
    </form>
  );
};

export default Login;
