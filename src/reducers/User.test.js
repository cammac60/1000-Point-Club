import { user } from './User';

describe('User', () => {

  it('Should return the inital state', () => {
    const result = user(null, {});
    expect(result).toEqual(null);
  });

  it('Should return the user value if the action type is ADD_USER', () => {
      const mockUser = {
        id: '1'
      };
      const mockAction = {
        type: 'ADD_USER',
        user: mockUser
      };
      const result = user(null, mockAction);
      expect(result).toEqual(mockUser);
  });

  it('Should return null if the action type is REMOVE_USER', () => {
    const mockAction = {
      type: 'REMOVE_USER',
      user: null
    };
    const result = user(null, mockAction);
    expect(result).toEqual(null);
  });

});
