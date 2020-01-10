import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfo } from '../../apiCalls/apiCalls';
import { addUser } from '../../actions';
import './Splash.scss';

export class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      error: ''
    }
  }
  render = () => {
    return (
      <div className="sign-in-wrapper">
        <form className="sign-in-form">
          <img alt="NHL Logo" className="nhl-logo-lrg" src={require("../../images/logos/NHL_Logo.png")}/>
          <h1>1000 Point Club</h1>
          <label className="sign-in-label">Enter your player ID:</label>
          <input className="sign-in-input" type="number" value={this.state.id} onChange={(event) => this.handleChange(event)}/>
          <button className="sign-in-btn" onClick={(event) => this.handleSubmit(event)}>Sign In</button>
          <span className="sign-in-error">{this.state.error}</span>
        </form>
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({
      id: event.target.value,
      error: ''
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.state.id) {
      let user = await this.props.fetchUser(this.state.id);
      this.props.addUser(user);
      this.props.history.push('/profile');
    } else {
        this.setState({error: 'Please enter an ID'});
    }
  }

}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addUser
  }, dispatch)
)

export default withRouter(connect(null, mapDispatchToProps)(Splash));
