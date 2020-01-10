import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App.js';
import { getUserInfo } from '../../apiCalls/apiCalls';
import { addMembers } from '../../actions';

jest.mock('../../apiCalls/apiCalls');

describe('App', () => {
  let wrapper, instance;
  let mockState = {
    id: '',
    error: ''
  };
  const mockUser = {
    id: '1'
  }

  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('fetchUser', () => {

    it('Should call the getUserInfo method with the base URL argument', () => {
      getUserInfo.mockImplementation(() => {});
      instance.state = {
        id: '1',
        error: ''
      };
      instance.fetchUser(instance.state.id);
      expect(getUserInfo).toHaveBeenCalledWith(`https://statsapi.web.nhl.com/api/v1/people/1`);
    });

    it('Should call the getUserInfo method with the base URL argument', () => {
      getUserInfo.mockImplementation(() => {});
      instance.state = {
        id: '1',
        error: ''
      };
      instance.fetchUser(instance.state.id);
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
