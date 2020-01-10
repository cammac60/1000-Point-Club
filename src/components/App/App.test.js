import React from 'react';
import { shallow } from 'enzyme';
import App, { mapStateToProps } from './App.js';

describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
  });

  it.skip('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
