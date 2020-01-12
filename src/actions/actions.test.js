import * as actions from '../actions';

describe('actions', () => {

  it('Should have a type of ADD_USER for addUser action', () => {
    const mockUser = {
      id: '1'
    };
    const expectedAction = {
      type: 'ADD_USER',
      user: mockUser
    };
    const result = actions.addUser(mockUser);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of REMOVE_USER for a removeUser action', () => {
    const expectedAction = {
      type: 'REMOVE_USER',
      user: null
    };
    const result = actions.removeUser();
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of ADD_MEMBERS for an addMembers action', () => {
    const mockPlayers = [
      {id: 1},
      {id: 2}
    ];
    const expectedAction = {
      type: 'ADD_MEMBERS',
      members: mockPlayers
    };
    const result = actions.addMembers(mockPlayers);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of SELECT_PLAYER for an addSelectedPlayer action', () => {
    const mockPlayer = {
      id: 1
    };
    const expectedAction = {
      type: 'SELECT_PLAYER',
      player: mockPlayer
    };
    const result = actions.addSelectedPlayer(mockPlayer);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of ADD_TEAMS for an addTeams action', () => {
    const mockTeams = [{id: 1}, {id: 2}];
    const expectedAction = {
      type: 'ADD_TEAMS',
      teams: mockTeams
    };
    const result = actions.addTeams(mockTeams);
    expect(result).toEqual(expectedAction);
  });

});
