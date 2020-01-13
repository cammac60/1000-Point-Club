import React from 'react';
import { shallow } from 'enzyme';
import { RosterSearch, mapStateToProps, mapDispatchToProps } from './RosterSearch';
import { addSelectedPlayer } from '../../actions';

describe('RosterSearch', () => {
  let wrapper, instance;
  let fetchUser = jest.fn();
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
    fetchUser,
    addToSelected: jest.fn()
  };
  const mockEvent = {
    target: {id: 1}
  };

  beforeEach(() => {
    wrapper = shallow(<RosterSearch {...mockProps}/>);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call the addToSelected method if a link is clicked', () => {
    instance.addToSelected = jest.fn();
    wrapper.find('.roster-ply-select').simulate('click', mockEvent);
    expect(instance.addToSelected).toHaveBeenCalled();
  });

  describe('addToSelected', () => {

    it('Should call the fetchUser method with the correct argument', () => {
      instance.addToSelected(mockEvent);
      expect(instance.props.fetchUser).toHaveBeenCalledWith(1);
    });

    it.skip('Should call the addSelectedPlayer method with the correct argument', () => {
      fetchUser = jest.fn(() => {id: 1});
      instance.addToSelected(mockEvent);
      expect(instance.props.fetchUser).toHaveBeenCalledWith(1);
    });
  });

});
