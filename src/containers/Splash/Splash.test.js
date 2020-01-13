import React from 'react';
import { shallow } from 'enzyme';
import { Splash, mapDispatchToProps } from './Splash.js';
import { addUser } from '../../actions';
import { getUserInfo } from '../../apiCalls/apiCalls';

jest.mock('../../apiCalls/apiCalls');

describe('Splash', () => {
  let wrapper, instance, mockEvent;
  const addUser = jest.fn();
  let fetchUser =jest.fn();
  const mockProps = {
    addUser,
    fetchUser,
    history: {
      push: jest.fn()
    }
  }
  let mockState = {
    id: '',
    error: ''
  };
  const mockUser = {
    id: '1'
  }

  beforeEach(() => {
    mockEvent = {
      preventDefault: jest.fn(),
      target: {
        value: '1'
      }
    };
    wrapper = shallow(<Splash {...mockProps}/>);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call the handleChange method on change', () => {
    instance.handleChange = jest.fn();
    wrapper.find('.sign-in-input').simulate('change', mockEvent);
    expect(instance.handleChange).toHaveBeenCalledWith(mockEvent);
  });

  it('Should call the handleSubmit method on click', () => {
    instance.handleSubmit = jest.fn();
    wrapper.find('.sign-in-btn').simulate('click', mockEvent);
    expect(instance.handleSubmit).toHaveBeenCalledWith(mockEvent);
  });

  describe('handleChange', () => {

    it('Should update the local state on change', () => {
      instance.handleChange(mockEvent);
      expect(instance.state).toEqual({
        id: '1',
        error: ''
      });
    });

    it('Should clear any error message on change', () => {
      instance.state = {
        id: '',
        error: 'error'
      }
      instance.handleChange(mockEvent);
      expect(instance.state).toEqual({
        id: '1',
        error: ''
      });
    });

  });

  describe('handleSubmit', () => {

    it('Should call the fetchUser method if there is an ID in state', () => {
      instance.state = {
        id: '1',
        error: ''
      }
      instance.handleSubmit(mockEvent);
      expect(instance.props.fetchUser).toHaveBeenCalledWith(instance.state.id);
    });

    it('Should add the correcrt error message to state if no ID has been entered', async () => {
      instance.state = {
        id: '',
        error: ''
      };
      await instance.handleSubmit(mockEvent);
      expect(instance.state).toEqual({
        id: '',
        error: 'Please enter an ID'
      });
    });

    it('Should add the correct error message to state if an incorrect ID has been entered', async () => {
      instance.state = {
        id: '4',
        error: ''
      };
      fetchUser = jest.fn(() => undefined);
      await instance.handleSubmit(mockEvent);
      expect(instance.state).toEqual({
        id: '4',
        error: 'We couldn\'t find a user associated with that ID'
      });
    });

    it('Should call the addUser method with the correct argument', async () => {
      instance.state = {
        id: '1',
        error: ''
      }
      instance.props.fetchUser.mockImplementation(() => mockUser);
      await instance.handleSubmit(mockEvent);
      expect(instance.props.addUser).toHaveBeenCalledWith(mockUser);
    });

    it('Should push the correct URL to history if the promises resolve', () => {
      instance.createUser = jest.fn();
      getUserInfo.mockImplementation(() => {
          return Promise.resolve(mockUser)
      });
      instance.props.fetchUser(mockState);
      expect(instance.props.history.push).toHaveBeenCalledWith('/profile');
    });

  });

});
