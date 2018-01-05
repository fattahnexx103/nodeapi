//Action Creators
import Axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = ()  =>{
  return function(dispatch){
      Axios.get('/api/current_user')
        .then((res) => {
          dispatch({ type: FETCH_USER, payload: res.data}) //send the response to the dispatch function
        }); //sends an api request to backend
  };
};

//taken token from stripe and send to backend
export const fetchToken = (token) =>{
  return function(dispatch){
    Axios.post('/api/stripe',token)
      .then((res) =>{
        dispatch({ type: FETCH_USER, payload: res.data }); //since we updating the exact user model
      });
  };
};
