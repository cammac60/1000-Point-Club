import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Club.scss';

export class Club extends Component {
  constructor(props) {
    super(props);
  }


  render = () => {
    console.log(this.props.members);
    let cards = this.props.members.map(mem => {
      return (
        <section className="legend-card">
          {mem.id}
        </section>
      )
    });
    console.log(cards);
    return (
      <div className="club-wrapper">
        {cards}
      </div>
    )
  }

}

export const mapStateToProps = state => ({
  user: state.user,
  members: state.members
});

export default connect(mapStateToProps)(Club);
