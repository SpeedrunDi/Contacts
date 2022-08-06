import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getContacts} from "../../store/contactsActions";
import ContactsCycle from "../../components/ContactsCycle/ContactsCycle";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const onGetFullData = id => {
    console.log(id);
  };

  return (
    <div className="Container">
      {contacts && <ContactsCycle contacts={contacts} onGetFullData={onGetFullData}/>}
    </div>
  );
};

export default Contacts;