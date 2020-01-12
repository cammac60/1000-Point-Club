import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { addSelectedPlayer } from '../../actions';

import './RosterSearch.scss';

export class RosterSearch extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    let curRoster = this.props.roster;
    let team = this.props.teams.find(team => team.id === parseInt(this.props.roster.id));
    let logoURL = team.abbreviation;
    let teamName = `${team.name} Roster`;
    let players = curRoster.roster.map(player => {
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
            <Link id={player.id} className="roster-ply-select" to="/vs" onClick={(event) => this.addToSelected(event)}>
            You vs. Him
            </Link>
          </td>
        </tr>
      )
    });
    return (
      <div className="roster-search-wrapper">
        <div className="roster-head-wrapper">
          <img className="roster-team-logo" alt={`${logoURL} Logo`} src={require(`../../images/logos/${logoURL}.svg`)}/>
          <h2 className="roster-header">{teamName}</h2>
        </div>
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

  addToSelected = async ({ target }) => {
    let { id } = target;
    let player = await this.props.fetchUser(id);
    this.props.addSelectedPlayer(player);
  }

}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addSelectedPlayer
  }, dispatch)
);

export const mapStateToProps = state => ({
  selected: state.selected,
  roster: state.roster,
  teams: state.teams
});

export default connect(mapStateToProps, mapDispatchToProps)(RosterSearch);
