import React from 'react';
import { shallow } from 'enzyme';
import { TeamFilter } from './TeamFilter.js';

describe('TeamFilter', () => {
  let wrapper, instance;
  const selectRoster = jest.fn();
  const mockProps = {
    teams: [{
      abbreviation: 'COL',
      id: 1,
      name: 'name'
    },
    {
      abbreviation: 'COL',
      id: 2,
      name: 'name'
    }],
    selectRoster
  };
  const mockEvent = {
    terget: {
      id: 1
    }
  };

  beforeEach(() => {
    wrapper = shallow(<TeamFilter {...mockProps}/>);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call the selectRoster method on click of a button with the correct agrument', () => {
    wrapper.find('.team-btn').first().simulate('click', mockEvent);
    expect(selectRoster).toHaveBeenCalledWith(mockEvent);
  });

});
