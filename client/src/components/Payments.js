import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component{
  //amount takes in cents
  render(){
    return(
      <StripeCheckout
        name="Survey Flow"
        description="$5 for 5 survey credits"
        amount={500}
        token={token => this.props.fetchToken(token)}
        stripeKey = {process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
