import { roster } from './Roster';

describe('Roster', () => {

  it('Should return the current state', () => {
    const result = roster(null, {});
    expect(result).toEqual(null);
  });

  it('Should return a roster if the action type is SELECT_ROSTER', () => {
    const mockRoster = [{
      id: 1
    }];
    const mockAction = {
      type: 'SELECT_ROSTER',
      roster: mockRoster
    };
    const result = roster(null, mockAction);
    expect(result).toEqual(mockRoster);
  });

});
