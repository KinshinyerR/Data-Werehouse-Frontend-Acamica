import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import UserForm from "./pages/Users/UserForm";
import Contacts from "./pages/Contacts/Contacts";
import ContactForm from "./pages/Contacts/ContactForm";
import Companies from "./pages/Companies/Companies";
import Region from "./pages/Region/Region";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/usuarios/formulario" component={UserForm} />
        <Route path="/usuarios" component={Users} />
        <Route path="/contactos/formulario" component={ContactForm} />
        <Route path="/contactos" component={Contacts} />
        <Route path="/compañias" component={Companies} />
        <Route path="/region" component={Region} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
