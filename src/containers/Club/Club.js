import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Club.scss';

export class Club extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    console.log(this.props.members);
    return (
      <div></div>
    )
  }

}

export const mapStateToProps = state => ({
  user: state.user,
  members: state.members
});

export default connect(mapStateToProps)(Club);
