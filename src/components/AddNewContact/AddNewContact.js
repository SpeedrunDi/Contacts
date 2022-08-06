import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import Button from "../UI/Button/Button";
import {addContact} from "../../store/contactsActions";
import {useHistory} from "react-router-dom";
import './AddNewContact.css';

const AddNewContact = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    email: '',
    img: '',
  });

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

    await dispatch(addContact(newContact));

    history.replace('/');
  };

  const backToContacts = () => {
    history.push('/');
  }

  return (
    <div className="Container">
      <div className="AddBlockContact">
        <h2 className="AddContactTitle">Add new contact</h2>
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