import {
  ACTION_MODAL,
  ADD_NEW_CONTACT_FAILURE,
  ADD_NEW_CONTACT_REQUEST,
  ADD_NEW_CONTACT_SUCCESS, CLEAR_CONTACT,
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  GET_CONTACT_FAILURE,
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS
} from "./contactsActions";

const initialState = {
  contacts: null,
  contact: null,
  loading: false,
  error: null,
  show: false,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_MODAL:
      return {...state, show: action.payload};
    case CLEAR_CONTACT:
      return {...state, contact: null};
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
    case GET_CONTACT_REQUEST:
      return {...state, loading: true, error: null};
    case GET_CONTACT_SUCCESS:
      return {...state, loading: false, contact: action.payload};
    case GET_CONTACT_FAILURE:
      return {...state, loading: false, error: action.payload};
    case DELETE_CONTACT_REQUEST:
      return {...state, loading: true, error: null};
    case DELETE_CONTACT_SUCCESS:
      return {...state, loading: false};
    case DELETE_CONTACT_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default contactsReducer;