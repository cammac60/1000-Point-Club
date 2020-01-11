import React from 'react';
import { shallow } from 'enzyme';

import { CheatSheet } from './CheatSheet';

describe('CheatSheet' ,() => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CheatSheet />);
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
