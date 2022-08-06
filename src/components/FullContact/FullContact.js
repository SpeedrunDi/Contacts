import React from 'react';
import Modal from "../UI/Modal/Modal";
import './FullContact.css';
import Button from "../UI/Button/Button";

const FullContact = (props) => {
  return (
    <Modal show={props.show}>
      <Button type="button" btnType="danger" onClick={props.onClosed}>&#10006;</Button>
      <div className="FullContact">
        <div className="ContactImg">
          <img src={props.contact.img} alt=""/>
        </div>
        <div className="ContactDetails">
          <p className="FullContactName">{props.contact.name}</p>
          <p className="ContactText">&#9990; {props.contact.phone}</p>
          {props.contact.email && <p className="ContactText">&#9993; {props.contact.email}</p>}
        </div>
      </div>
      <div className="ButtonsBlock">
        <Button type="button" >Edit</Button>
        <Button type="button" btnType="danger">Delete</Button>
      </div>
    </Modal>
  );
};

export default FullContact;