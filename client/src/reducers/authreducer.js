import { FETCH_USER } from '../actions/types';

export default function(state = null, action){ //initial state is blank
  console.log(action);

  switch(action.type){
    case FETCH_USER:
      return action.payload || false;
    default:
      return state; //just return the action
  }
}
