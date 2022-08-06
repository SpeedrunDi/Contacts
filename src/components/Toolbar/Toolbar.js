import React from 'react';
import Button from "../UI/Button/Button";
import {useHistory} from "react-router-dom";
import './Toolbar.css';

const Toolbar = () => {
  const history = useHistory();

  const onAddNewContact = () => {
    history.push('/new');
  };

  return (
    <header className="Toolbar">
      <div className="Toolbar-Logo">
        <h1>Contacts</h1>
      </div>
      <div>
        <Button type="button" onClick={onAddNewContact}>Add new contact</Button>
      </div>
    </header>
  );
};

export default Toolbar;