import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux'; //layer to link up react with redux
import { createStore, applyMiddleware } from 'redux';
import MaterializeCSS from 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';
import App from './components/App';
import reducers  from './reducers'; //import the reducers
window.axios = axios;

const store = createStore(
  reducers, {}, applyMiddleware(ReduxThunk));// second arg is initial state

ReactDOM.render(
  <Provider store = {store}><App /></Provider>, //put the store and app inside the provider
  document.querySelector('#root')
); //render the root app component which inturns load all other components

console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
console.log('Environment is', process.env.NODE_ENV);
