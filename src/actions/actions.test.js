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

});
