import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader.js';

describe('Loader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Loader />);
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
