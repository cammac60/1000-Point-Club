import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSelectedPlayer } from '../../actions';

import './RosterSearch.scss';

export class RosterSearch extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    let team = this.props.roster;
    let players = team.roster.map(player => {
      return (
        <tr key={player.id} className="roster-tbl-row">
          <td className="roster-tbl-data">
            {player.id}
          </td>
          <td className="roster-tbl-data">
            {player.name}
          </td>
          <td className="roster-tbl-data">
            {player.position}
          </td>
          <td className="roster-tbl-data">
            <button id={player.id} className="roster-ply-select">
            You vs. Him
            </button>
          </td>
        </tr>
      )
    });
    return (
      <div className="roster-search-wrapper">
        <table className="roster-tbl">
          <thead>
            <tr className="roster-tbl-row">
              <th className="roster-table-head">
                ID
              </th>
              <th className="roster-table-head">
                Name
              </th>
              <th className="roster-table-head">
                Position
              </th>
              <th className="roster-table-head">
                Select
              </th>
            </tr>
          </thead>
          <tbody>
            {players}
          </tbody>
        </table>
      </div>
    )
  }

}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addSelectedPlayer
  }, dispatch)
);

export const mapStateToProps = state => ({
  selected: state.selected,
  roster: state.roster
});

export default connect(mapStateToProps, mapDispatchToProps)(RosterSearch);
