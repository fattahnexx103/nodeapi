import { combineReducers } from 'redux';
import authreducer  from './authreducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  auth: authreducer,
  form: reduxForm
});
