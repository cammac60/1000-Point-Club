import React from 'react';
import { shallow } from 'enzyme';
import { Versus } from './Versus';

describe('Versus', () => {
  let wrapper;
  const mockUser = {
    name: 'name',
    stats: {
      goals: 1,
      assists: 1,
      points: 2,
      games: 2
    }
  };
  const mockProps = {
    user: mockUser,
    selected: mockUser
  };

  beforeEach(() => {
    wrapper = shallow(<Versus {...mockProps}/>);
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
