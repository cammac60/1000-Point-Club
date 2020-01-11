import { selected } from './Selected';

describe('Selected', () => {

  it('Should return the current state', () => {
    const result = selected(null, {});
    expect(result).toEqual(null);
  });

  it('Should return the action if the action type is SELECT_PLAYER', () => {
    const mockPlayer = {
      id: 1
    };
    const mockAction = {
      type: 'SELECT_PLAYER',
      player: mockPlayer
    };
    const result = selected(null, mockAction);
    expect(result).toEqual(mockPlayer);
  });

});
