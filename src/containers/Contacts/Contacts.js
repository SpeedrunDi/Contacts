import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionModal, deleteContact, getContact, getContacts} from "../../store/contactsActions";
import ContactsCycle from "../../components/ContactsCycle/ContactsCycle";
import Spinner from "../../components/UI/Spinner/Spinner";
import FullContact from "../../components/FullContact/FullContact";
import './Contacts.css';

const Contacts = ({history}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const contact = useSelector(state => state.contact);
  const loading = useSelector(state => state.loading);
  const show = useSelector(state => state.show);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const onGetFullData = async id => {
    await dispatch(getContact(id));
    dispatch(actionModal(true));
  };

  const onClosed = () => {
    dispatch(actionModal(false));
  };

  const onEditContact = (id) => {
    history.push('/edit/' + id);
    dispatch(actionModal(false));
  };

  const onDeleteContact = async id => {
    await dispatch(deleteContact(id));
    await dispatch(getContacts());
    dispatch(actionModal(false));
  };

  let loader = contacts && <ContactsCycle contacts={contacts} onGetFullData={onGetFullData}/>;
  if (loading) {
    loader = <Spinner/>;
  }

  return (
    <div className="Container">
      {contact &&
        <FullContact show={show}
                     loading={loading}
                     contact={contact}
                     onClosed={onClosed}
                     onEdit={onEditContact}
                     onDelete={onDeleteContact}
        />
      }
      <div className="Contacts">
        {loader}
      </div>
    </div>
  );
};

export default Contacts;