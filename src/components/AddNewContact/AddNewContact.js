import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from "../UI/Button/Button";
import {addContact, clearContact, editContact} from "../../store/contactsActions";
import './AddNewContact.css';

const AddNewContact = ({history, match}) => {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contact);

  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    email: '',
    img: '',
  });

  useEffect(() => {
    if (contact) {
      delete contact.id;

      setNewContact(contact);
    }
  }, [contact]);

  const onChange = (e) => {
    const {id, value} = e.target;

    setNewContact(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const saveContact = async () => {
    if (newContact.name === '' || newContact.phone === '') {
      alert('Enter a details in fields Name and Phone!');
      return;
    }

    if (match.params.id) {
      await dispatch(editContact(match.params.id, newContact));
      dispatch(clearContact());
    } else {
      await dispatch(addContact(newContact));
    }

    history.replace('/');
  };

  const backToContacts = () => {
    if (match.params.id) dispatch(clearContact());
    history.push('/');
  }

  return (
    <div className="Container">
      <div className="AddBlockContact">
        <h2 className="AddContactTitle">{match.params.id ? "Edit current contact" : "Add new contact"}</h2>
        <div className="InputsBlock">
          <div className="InputBlock">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={newContact.name} onChange={onChange}/>
          </div>
          <div className="InputBlock">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" value={newContact.phone} onChange={onChange}/>
          </div>
          <div className="InputBlock">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={newContact.email} onChange={onChange}/>
          </div>
          <div className="InputBlock">
            <label htmlFor="img">Photo</label>
            <input type="text" id="img" value={newContact.img} onChange={onChange}/>
          </div>
          <div className="imgPreview">
            <p>Photo preview</p>
            <img src={newContact.img} alt=""/>
          </div>
          <div className="AddButtonsBlock">
            <Button type="submit" onClick={saveContact}>Save</Button>
            <Button type="button" btnType="danger" onClick={backToContacts}>Back to contacts</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewContact;