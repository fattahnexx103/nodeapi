import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import { reduxForm } from 'redux-form';
import SurveyFormReview from './surveyFormReview';

class SurveyNew extends Component{
  //only in the create react module
  state = { showFormReview: false};

  renderContent(){
    if(this.state.showFormReview === true){
      return <SurveyFormReview
        onCancel={() =>this.setState({ showFormReview: false})}
       />;
    }
    return( <SurveyForm
    onSurveySubmit = {() => this.setState({ showFormReview: true})}
    />
  );
  }

  render(){
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form:'surveyForm'
})(SurveyNew);