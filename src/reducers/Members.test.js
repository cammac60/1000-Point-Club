import { members } from './Members';

describe('Members', () => {

  it('Should return the current state', () => {
    const result = members(null, {});
    expect(result).toEqual(null);
  });

  it('Should return the members if the action type is ADD_MEMBERS', () => {
    const mockMembers = [
      {id: 1},
      {id: 2}
    ];
    const expectedAction = {
      type: 'ADD_MEMBERS',
      members: mockMembers
    };
    const result = members(null, expectedAction);
    expect(result).toEqual(mockMembers);
  });

});
