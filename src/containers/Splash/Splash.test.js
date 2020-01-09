import React from 'react';
import { shallow } from 'enzyme';
import { Splash, mapDispatchToProps } from './Splash.js';
import { getUserInfo } from '../../apiCalls/apiCalls';
import { addUser } from '../../actions';

describe('Splash', () => {
  let wrapper, instance, mockEvent;
  const addUser = jest.fn();
  const mockProps = {
    addUser,
    history: {
      push: jest.fn()
    }
  }

  beforeEach(() => {
    mockEvent = {
      preventDefault: jest.fn(),
      target: {
        value: '1'
      }
    }
    wrapper = shallow(<Splash {...mockProps}/>);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('Should call the handleChange method on change', () => {
    wrapper.find('.sign-in-input').simulate('change', mockEvent);
    expect(instance.handleChange).toHaveBeenCalledWith(mockEvent);
  });

  it.skip('Should call the handleSubmit method on click', () => {
    wrapper.find('.sign-in-btn').simulate('click', mockEvent);
    expect(instance.handleSubmit).toHaveBeenCalledWith(mockEvent);
  });

  it('Should update the local state on change', () => {
    instance.handleChange(mockEvent);
    expect(instance.state).toEqual({
      id: '1',
      error: ''
    });
  });

});
