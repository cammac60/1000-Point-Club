import React from 'react';
import Profile, { mapStateToProps } from './Profile.js';
import { shallow } from 'enzyme';

describe('Profile', () => {
  let wrapper, instance;
  const user = {
    id: 8474569,
    name: "Colin Wilson",
    birthDate: "1989-10-20",
    birthCity: "Greenwich",
    birthStateProvince: "CT",
    birthCountry: "USA",
    position: "C",
    stats: {
      assists: 173,
      goals: 113,
      games: 632,
      points: 286
    }
  };
  const mockProps = {
    user
  }

  beforeEach(() => {
    wrapper = shallow(<Profile {...mockProps}/>);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    instance.props = mockProps;
    expect(wrapper).toMatchSnapshot();
  });

});
