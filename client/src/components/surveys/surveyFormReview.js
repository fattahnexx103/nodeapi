import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyReview = ({onCancel, formValues, submitSurvey, history}) =>{
  return(
    <div>
      <h5>Please Confirm your inputs</h5>
      <div>
        <div>
          <label>Survey Title</label>
          <div>{formValues.title}</div>
        </div>
        <div>
          <label>Subject Line</label>
          <div>{formValues.line}</div>
        </div>
        <div>
          <label>Subject Body</label>
          <div>{formValues.body}</div>
        </div>
        <div>
          <label>Recipient List</label>
          <div>{formValues.recipients}</div>
        </div>
      </div>
      <button className = "yellow darken-3 white-text btn-flat" onClick = {onCancel}>
        Back
      </button>
      <button className = "green white-text right btn-flat" onClick ={() => submitSurvey(formValues, history)}>
        Send Survey
        <i className = "material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state){
  //console.log(state);
  return{
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
