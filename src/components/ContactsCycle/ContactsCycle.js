import React from 'react';
import Contact from "./Contact/Contact";

const ContactsCycle = ({contacts, onGetFullData}) => {
  const renderContacts = contacts.map(contact => (
    <Contact key={contact.id} img={contact.img} name={contact.name} onClick={() => onGetFullData(contact.id)}/>
  ));
  return (
    <>
      {renderContacts}
    </>
  );
};

export default ContactsCycle;