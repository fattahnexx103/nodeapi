//Action Creators
import Axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = ()  =>{
  return function(dispatch){
      Axios.get('/api/current_user')
        .then((res) => {
          dispatch({ type: FETCH_USER, payload: res}) //send the response to the dispatch function
        }); //sends an api request to backend
  };
};
