import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeUser } from '../../actions';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render = () => {
    return (
      <header className="main-header">
        <img src={require('../../images/logos/NHL_Logo.png')} alt="NHL Logo" className="header-logo"/>
        <nav className="header-links-wrapper">
          <Link to="/profile" className="nav-link">Your Stats</Link>
          <Link to="/1000club" className="nav-link">1000 Point Club</Link>
          <Link to="/search" className="nav-link">Search</Link>
        </nav>
        <button className="sign-out-button" onClick={this.logOut}>Sign Out ></button>
      </header>
    )
  }

  logOut = () => {
    this.props.removeUser();
    this.props.history.push('/');
  }

}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    removeUser
  }, dispatch)
);

export default withRouter(connect(null, mapDispatchToProps)(Header));
