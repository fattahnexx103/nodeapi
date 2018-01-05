import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component{

  //helper method
  renderContent(){
    switch (this.props.auth){
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return [
          <li key="abc101"><Payments /></li>,
          <li key="abc1012" style={{margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="abc102"><a href="/api/logout">Logout</a></li>
      ];
    }
  }

  render(){
    //console.log(this.props);
    //in link, if true then right after ?, if false after :
    return(
      <nav>
        <div className = "nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'} className = "left brand-logo">
            Campaign Flow
          </Link>
          <ul className = "right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
