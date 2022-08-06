import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getContacts} from "../../store/contactsActions";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div>
      
    </div>
  );
};

export default Contacts;