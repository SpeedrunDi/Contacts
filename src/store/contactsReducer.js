import {
  ADD_NEW_CONTACT_FAILURE,
  ADD_NEW_CONTACT_REQUEST,
  ADD_NEW_CONTACT_SUCCESS,
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS
} from "./contactsActions";

const initialState = {
  contacts: null,
  loading: false,
  error: null,
  show: false,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS_REQUEST:
      return {...state, loading: true, error: null};
    case GET_CONTACTS_SUCCESS:
      return {...state, loading: false, contacts: action.payload};
    case GET_CONTACTS_FAILURE:
      return {...state, loading: false, error: action.payload};
    case ADD_NEW_CONTACT_REQUEST:
      return {...state, loading: true, error: null};
    case ADD_NEW_CONTACT_SUCCESS:
      return {...state, loading: false};
    case ADD_NEW_CONTACT_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default contactsReducer;