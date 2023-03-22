import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionModal, clearContact, deleteContact, getContact, getContacts} from "../../store/contactsActions";
import ContactsCycle from "../../components/ContactsCycle/ContactsCycle";
import Spinner from "../../components/UI/Spinner/Spinner";
import FullContact from "../../components/FullContact/FullContact";
import SearchContact from "../../components/SearchContact/SearchContact";
import './Contacts.css';

const Contacts = ({history}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const loading = useSelector(state => state.loading);
  const [state, setState] = useState([])

  useEffect(() => {
    if (contacts) {
      setState(contacts)
    }
  }, [contacts])

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const searchContact = newContacts => {
    setState(newContacts)
  }

  const onGetFullData = async id => {
    dispatch(actionModal(true));
    await dispatch(getContact(id));
  };

  const onClosed = () => {
    dispatch(clearContact());
    dispatch(actionModal(false));
  };

  const onEditContact = (id) => {
    history.push('/edit/' + id);
    dispatch(actionModal(false));
  };

  const onDeleteContact = async id => {
    await dispatch(deleteContact(id));
    await dispatch(getContacts());
    dispatch(clearContact());
    dispatch(actionModal(false));
  };

  let loader = state && <ContactsCycle contacts={state} onGetFullData={onGetFullData}/>;
  if (loading) {
    loader = <Spinner/>;
  }

  return (
    <div className="Container">
      <SearchContact contacts={contacts} onSearchContact={searchContact}/>
      <FullContact
        onClosed={onClosed}
        onEdit={onEditContact}
        onDelete={onDeleteContact}
      />
      <div className="Contacts">
        {loader}
      </div>
    </div>
  );
};

export default Contacts;