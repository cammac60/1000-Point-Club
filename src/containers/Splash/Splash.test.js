import React from 'react';
import { shallow } from 'enzyme';
import { Splash, mapDispatchToProps } from './Splash.js';
import { getUserInfo } from '../../apiCalls/apiCalls';
import { addUser } from '../../actions';

jest.mock('../../apiCalls/apiCalls');

describe('Splash', () => {
  let wrapper, instance, mockEvent;
  const addUser = jest.fn();
  const mockProps = {
    addUser,
    history: {
      push: jest.fn()
    }
  }
  const mockState = {
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
      instance.fetchUser = jest.fn();
      instance.handleSubmit(mockEvent);
      expect(instance.fetchUser).toHaveBeenCalledWith(instance.state);
    });

    it('Should add the correcrt error message to state if no ID has been entered', () => {
      instance.state = {
        id: '',
        error: ''
      };
      instance.handleSubmit(mockEvent);
      expect(instance.state).toEqual({
        id: '',
        error: 'Please enter an ID'
      });
    });

  });

  describe('fetchUser', () => {

    it('Should call the getUserInfo method with the base URL argument', () => {
      getUserInfo.mockImplementation(() => {});
      instance.state = {
        id: '1',
        error: ''
      };
      instance.fetchUser(instance.state);
      expect(getUserInfo).toHaveBeenCalledWith(`https://statsapi.web.nhl.com/api/v1/people/1`);
    });

    it('Should call the getUserInfo method with the base URL argument', () => {
      getUserInfo.mockImplementation(() => {});
      instance.state = {
        id: '1',
        error: ''
      };
      instance.fetchUser(instance.state);
      expect(getUserInfo).toHaveBeenCalledWith(`https://statsapi.web.nhl.com/api/v1/people/1/stats?stats=careerRegularSeason`);
    });

    it('Should call the createUser method with the correct argument', async () => {
      instance.createUser = jest.fn();
      getUserInfo.mockImplementation(() => {
          return Promise.resolve(mockUser)
      });
      await instance.fetchUser(mockState);
      expect(instance.createUser).toHaveBeenCalledWith(mockUser, mockUser)
    });

    it('Should call the addUser method with the correct argument', async () => {
      instance.createUser = jest.fn(() => mockUser);
      getUserInfo.mockImplementation(() => {
          return Promise.resolve(mockUser)
      });
      await instance.fetchUser(mockState);
      expect(instance.props.addUser).toHaveBeenCalledWith(mockUser);
    });

    it('Should add an error message to state if the promise rejects', async () => {
      getUserInfo.mockImplementation(() => {
          return Promise.reject(Error('error'))
      });
      instance.state = {
        id: '',
        error: ''
      }
      await instance.fetchUser(mockState);
      expect(instance.state).toEqual({
        id: '',
        error: 'error'
      });
    });

  });

  describe('createUser', () => {
    const mockUserInfo = {
      people: [{
        id: '1',
        fullName: 'name',
        birthDate: 'birthDate',
        birthCity: 'birthCity',
        birthCountry: 'birthCountry',
        birthStateProvince: 'birthStateProvince',
        primaryPosition: {
            code: 'position'
          }
      }]
    };
    const mockStats = {
      stats: [{
        splits: [{
          stat: 'stats'
        }]
      }]
    }

    it('Should create and return a user object', () => {
      expect(instance.createUser(mockUserInfo, mockStats)).toEqual({
        id: '1',
        name: 'name',
        birthDate: 'birthDate',
        birthCity: 'birthCity',
        birthCountry: 'birthCountry',
        birthStateProvince: 'birthStateProvince',
        position: 'position',
        stats: 'stats'
      });
    });

  });

});
