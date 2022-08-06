import React from 'react';
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";
import './FullContact.css';

const FullContact = (props) => {
  let loader = (
    <>
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
        <Button type="button" onClick={() => props.onEdit(props.contact.id)}>Edit</Button>
        <Button type="button" btnType="danger" onClick={() => props.onDelete(props.contact.id)}>Delete</Button>
      </div>
    </>
  );
  if (props.loading) {
    loader = <Spinner/>
  }

  return (
    <Modal show={props.show}>
      {loader}
    </Modal>
  );
};

export default FullContact;