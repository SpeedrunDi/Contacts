import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import Button from "../UI/Button/Button";
import {addContact} from "../../store/contactsActions";
import './AddNewContact.css';

const AddNewContact = () => {
  const dispatch = useDispatch();

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

  const saveContact = () => {
    dispatch(addContact(newContact));
  };

  return (
    <div className="Container">
      <div className="AddBlockContact">
        <h2>Add new contact</h2>
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
          <div>
            <p>Photo preview</p>
            <img src={newContact.img} alt="" className="Img"/>
          </div>
          <div className="AddButtonsBlock">
            <Button type="submit" onClick={saveContact}>Save</Button>
            <Button type="button" btnType="danger">Back</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewContact;