import React from 'react';
import {useSelector} from "react-redux";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";
import './FullContact.css';

const FullContact = (props) => {
  const contact = useSelector(state => state.contact);
  const contactLoading = useSelector(state => state.contactLoading);
  const show = useSelector(state => state.show);

  let loader = (
    contact ? (
      <>
        <Button type="button" btnType="danger" onClick={props.onClosed}>&#10006;</Button>
        <div className="FullContact">
          <div className="ContactImg">
            <img
              src={
                contact.img ||
                'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT6UdRbcbzqWG2-B2DgnxnTbup_lMM9sHFrv_7R6yUKa9313uftaYlHPzucRQRf-ObTESz2FAv2DDSnn93TfoI'
              }
              alt=""
            />
          </div>
          <div className="ContactDetails">
            <p className="FullContactName">{contact.name}</p>
            <p className="ContactText">&#9990; {contact.phone}</p>
            {contact.email && <p className="ContactText">&#9993; {contact.email}</p>}
          </div>
        </div>
        <div className="ButtonsBlock">
          <Button type="button" onClick={() => props.onEdit(contact.id)}>Edit</Button>
          <Button type="button" btnType="danger" onClick={() => props.onDelete(contact.id)}>Delete</Button>
        </div>
      </>
    ) : (
      <p className="FailedText" onClick={props.onClosed}>Network failed!</p>

    )
  );
  if (contactLoading) {
    loader = <Spinner/>
  }

  return (
    <Modal show={show}>
      {loader}
    </Modal>
  );
};

export default FullContact;