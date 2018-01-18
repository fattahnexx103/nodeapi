import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; //reduxform helps to communicate with redux store
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

class SurveyForm extends Component{

  renderFields(){
    return(
      <div>
        <Field label="Survey Title" type = "text" name="title" component={SurveyField} />
        <Field label="Survey Line" type = "text" name="line" component={SurveyField} />
        <Field label="Email Body" type = "text" name="body" component={SurveyField} />
        <Field label="Recipient List" type = "text" name="recipients" component={SurveyField} />
      </div>
    );
  }

  render(){
    return (
      <div>
        <form onSubmit = {this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className = "material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values){
  const errors = {}; //if empty then no errors

  if(!values.title){
    errors.title = 'You must provide a title';
  }

  if(!values.line){
    errors.line = 'You must provide a subject';
  }

  if(!values.body){
    errors.body = 'You must provide a description';
  }

  errors.recipients = validateEmails(values.recipients || '');

  if(!values.recipients){
    errors.recipients = 'You must provide a valid email address';
  }

  return errors;
}

export default reduxForm(
  {
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
  }
) (SurveyForm);
