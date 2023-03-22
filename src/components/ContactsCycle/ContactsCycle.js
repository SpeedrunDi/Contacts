import React from 'react';
import Contact from "./Contact/Contact";
import './ContactsCycle.css'

const ContactsCycle = ({contacts, onGetFullData}) => {
  const groups = {};
  contacts.forEach(contact => {
    const firstLetter = contact.name.charAt(0).toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [contact];
    } else {
      groups[firstLetter].push(contact);
    }
  });

  return (
    Object.keys(groups).sort().map((letter, index) => (
      <div key={index} className="Group">
        <h2>{letter}</h2>
        {groups[letter].map(contact => (
          <Contact key={contact.id} img={contact.img} name={contact.name} onClick={() => onGetFullData(contact.id)}/>
        ))}
      </div>
    ))
  );
};

export default ContactsCycle;