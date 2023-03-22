import React from 'react';
import './SearchContact.css';

const SearchContact = ({contacts, onSearchContact}) => {
  const searchNames = (e) => {
    const filter = e.target.value.toUpperCase();

    const newContacts = [];

    contacts.forEach(contact => {
      const name = contact.name.toUpperCase();

      if (name.indexOf(filter) > -1) {
        newContacts.push(contact)
      }
    });

    onSearchContact(newContacts)
  };

  return (
    <div className="Search-Block">
      <input type="text" placeholder="Поиск контактов" onKeyUp={(e) => searchNames(e)}/>
    </div>
  );
};

export default SearchContact;