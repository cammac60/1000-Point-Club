import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
        <Link to="/cheat-sheet" className="cheat-sheet-link">Need help finding an ID?</Link>
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
    let user = await this.props.fetchUser(this.state.id);
    if (this.state.id && user) {
      this.props.addUser(user);
      this.props.history.push('/profile');
    } if (!this.state.id) {
        this.setState({error: 'Please enter an ID'});
    } else {
        this.setState({error: 'We couldn\'t find a user associated with that ID'});
    }
  }

}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addUser
  }, dispatch)
)

export default withRouter(connect(null, mapDispatchToProps)(Splash));
