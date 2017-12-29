import React,  { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; //react router for configuring the routes
import { connect } from 'react-redux';
import * as actions from '../actions'; //get all the action creators
import Header from './Header';

//dummy components

const Dashboard = () =>{
  return <h2>Dashboard</h2>
};

const SurveyNew = () =>{
  return <h2>SurveyNew</h2>
};

const Landing = () =>{
  return <h2>Landing</h2>
};

class App extends Component{

  componentDidMount(){
      this.props.fetchUser();
  }

  render(){
    return (
      <div className = "container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact = {true} path="/" component = {Landing} />
            <Route exact = {true} path='/surveys' component = {Dashboard} />
            <Route path='/surveys/new' component = {SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default  connect(null, actions)(App);
