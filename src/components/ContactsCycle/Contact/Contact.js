import React from 'react';
import './Contact.css';

const Contact = ({img, name, onClick}) => (
  <div className="Contact" onClick={onClick}>
    <div className="ImgBlock">
      <img src={img} alt="Avatar"/>
    </div>
    <div className="NameBlock">
      <p>{name}</p>
    </div>
  </div>
);

export default Contact;