import axios from "axios";

export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT';

export const addNewContact = type => ({type: ADD_NEW_CONTACT, payload: type});

export const GET_CONTACTS_REQUEST = 'GET_CONTACTS_REQUEST';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const GET_CONTACTS_FAILURE = 'GET_CONTACTS_FAILURE';

export const getContactsRequest = () => ({type: GET_CONTACTS_REQUEST});
export const getContactsSuccess = contacts => ({type: GET_CONTACTS_SUCCESS, payload: contacts});
export const getContactsFailure = error => ({type: GET_CONTACTS_FAILURE, payload: error});

export const getContacts = () => {
  return async dispatch => {
    try {
      dispatch(getContactsRequest());
      const {data} = await axios('/contacts.json');
      console.log(data);
      dispatch(getContactsSuccess());
    } catch (e) {
      dispatch(getContactsFailure(e.message));
    }
  };
};