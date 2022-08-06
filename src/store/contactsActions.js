import axios from "axios";

export const ACTION_MODAL = 'ACTION_MODAL';

export const actionModal = type => ({type: ACTION_MODAL, payload: type});

export const GET_CONTACTS_REQUEST = 'GET_CONTACTS_REQUEST';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const GET_CONTACTS_FAILURE = 'GET_CONTACTS_FAILURE';

export const getContactsRequest = () => ({type: GET_CONTACTS_REQUEST});
export const getContactsSuccess = contacts => ({type: GET_CONTACTS_SUCCESS, payload: contacts});
export const getContactsFailure = error => ({type: GET_CONTACTS_FAILURE, payload: error});

export const ADD_NEW_CONTACT_REQUEST = 'ADD_NEW_CONTACT_REQUEST';
export const ADD_NEW_CONTACT_SUCCESS = 'ADD_NEW_CONTACT_SUCCESS';
export const ADD_NEW_CONTACT_FAILURE = 'ADD_NEW_CONTACT_FAILURE';

export const addNewContactRequest = () => ({type: ADD_NEW_CONTACT_REQUEST});
export const addNewContactSuccess = () => ({type: ADD_NEW_CONTACT_SUCCESS});
export const addNewContactFailure = error => ({type: ADD_NEW_CONTACT_FAILURE, payload: error});

export const GET_CONTACT_REQUEST = 'GET_CONTACT_REQUEST';
export const GET_CONTACT_SUCCESS = 'GET_CONTACT_SUCCESS';
export const GET_CONTACT_FAILURE = 'GET_CONTACT_FAILURE';

export const getContactRequest = () => ({type: GET_CONTACT_REQUEST});
export const getContactSuccess = contact => ({type: GET_CONTACT_SUCCESS, payload: contact});
export const getContactFailure = error => ({type: GET_CONTACT_FAILURE, payload: error});

export const getContacts = () => {
  return async dispatch => {
    try {
      dispatch(getContactsRequest());
      const {data} = await axios('/contacts.json');

      let newData = data;
      if (data) {
        newData = Object.keys(data).map(key => ({name: data[key].name, img: data[key].img, id: key}));
      }

      dispatch(getContactsSuccess(newData));
    } catch (e) {
      dispatch(getContactsFailure(e.message));
    }
  };
};

export const addContact = contactData => {
  return async dispatch => {
    try {
      dispatch(addNewContactRequest());
      await axios.post('/contacts.json', contactData);

      dispatch(addNewContactSuccess());
    } catch (e) {
      dispatch(addNewContactFailure(e.message));
    }
  };
};

export const getContact = id => {
  return async dispatch => {
    try {
      dispatch(getContactRequest());
      const {data} = await axios('/contacts/' + id + '.json');
      data.id = id;

      dispatch(getContactSuccess(data));
    } catch (e) {
      dispatch(getContactFailure(e.message));
    }
  };
};