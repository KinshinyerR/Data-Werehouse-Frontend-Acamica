import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../lib/services/Login/login.service";
import img from "../../images/dt1.png";

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loanding, setLoanding] = useState(false);
  const { email, password } = data;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoanding(true);
    login(data)
      .then((token) => {
        console.log(token);
        localStorage.setItem("token", token);
        history.push("/contactos");
      })
      .catch((err) => {
        setLoanding(false);
        setError(err.response.data);
      });
  };

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="w-50 mx-auto mt-5 pt-5 pb-3 rounded shadow-lg text-center"
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
      {loanding ? (
        <div class="sk-circle">
          <div class="sk-circle1 sk-child"></div>
          <div class="sk-circle2 sk-child"></div>
          <div class="sk-circle3 sk-child"></div>
          <div class="sk-circle4 sk-child"></div>
          <div class="sk-circle5 sk-child"></div>
          <div class="sk-circle6 sk-child"></div>
          <div class="sk-circle7 sk-child"></div>
          <div class="sk-circle8 sk-child"></div>
          <div class="sk-circle9 sk-child"></div>
          <div class="sk-circle10 sk-child"></div>
          <div class="sk-circle11 sk-child"></div>
          <div class="sk-circle12 sk-child"></div>
        </div>
      ) : null}
      {error ? <p className="mt-3 mb-3 text-muted">{error}</p> : null}
      <p className="mt-3 mb-3 text-muted">Data Werehouse © 2021</p>
    </form>
  );
};

export default Login;
