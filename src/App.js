import React from "react";
import Layout from "./components/UI/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Contacts from "./containers/Contacts/Contacts";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Contacts}/>
    </Switch>
  </Layout>
);

export default App;
