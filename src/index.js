import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";
import contactsReducer from "./store/contactsReducer";
import App from './App';
import './index.css';

axios.defaults.baseURL = 'https://other-content-educational-default-rtdb.europe-west1.firebasedatabase.app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(contactsReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
