import React from 'react';
import Toolbar from "../../Toolbar/Toolbar";
import './Layout.css';

const Layout = (props) => {
  return (
    <>
      <Toolbar/>
      <main className="Content-Layout">{props.children}</main>
    </>
  );
};

export default Layout;