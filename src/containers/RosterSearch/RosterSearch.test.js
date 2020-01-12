import React from 'react';
import { shallow } from 'enzyme';
import { RosterSearch, mapStateToProps, mapDispatchToProps } from './RosterSearch';
import { addSelectedPlayer } from '../../actions';

describe('RosterSearch', () => {
  let wrapper, instance;
  const mockProps = {
    selected: 1,
    roster: {
      id: 1,
      roster: [{id: 1, name: 'name', position: 'D'}]
    },
    teams: [{
      id: 1,
      abbreviation: 'COL',
      name: 'name'
    }, {
      id: 22,
      abbreviation: 'DAL',
      name: 'name2'
    }],
    fetchUser: jest.fn(),
    addToSelected: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<RosterSearch {...mockProps}/>);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
