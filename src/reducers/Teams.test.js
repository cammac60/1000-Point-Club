import { teams } from './Teams';

describe('Teams', () => {

  it('Should return the current state', () => {
    const result = teams(null, {});
    expect(result).toEqual(null);
  });

  it('Should be return the teams if the action type is ADD_TEAMS', () => {
    const mockTeams = [{id: 1}, {id: 2}];
    const expectedAction = {
      type: 'ADD_TEAMS',
      teams: mockTeams
    };
    const result = teams(null, expectedAction);
    expect(result).toEqual(mockTeams);
  });

});
