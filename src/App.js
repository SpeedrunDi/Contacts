import React from "react";
import Layout from "./components/UI/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Contacts from "./containers/Contacts/Contacts";
import AddNewContact from "./components/AddNewContact/AddNewContact";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Contacts}/>
      <Route path="/new" component={AddNewContact}/>
      <Route path="/edit/:id" component={AddNewContact}/>
    </Switch>
  </Layout>
);

export default App;
