import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App.js';
import { getUserInfo, getThousandClub } from '../../apiCalls/apiCalls';
import { addMembers } from '../../actions';

jest.mock('../../apiCalls/apiCalls');

describe('App', () => {
  let wrapper, instance;
  const addMembers = jest.fn();
  let mockState = {
    id: '',
    error: ''
  };
  const mockUser = {
    id: '1'
  }
  const mockMembers = {
    data: [
      {
        id: {
          skaterId: 1
        }
      },
      {
        id: {
          skaterId: 2
        }
      }
    ]
  };
  const mockProps = {
    addMembers
  }

  beforeEach(() => {
    wrapper = shallow(<App {...mockProps}/>);
    instance = wrapper.instance();
    getThousandClub.mockImplementation(() => {
      return Promise.resolve(mockMembers)
    });
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('componentDidMount', () => {

    it('Should call fetchClub on page load', () => {
      instance.fetchClub = jest.fn();
      instance.componentDidMount();
      expect(instance.fetchClub).toHaveBeenCalled();
    });

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

  describe('fetchClub', () => {

    it('Should call getThousandClub with the correct url', () => {
      instance.fetchClub();
      expect(getThousandClub).toHaveBeenCalledWith('https://records.nhl.com/site/api/milestone-1000-point-career');
    });

    it('Should call createMembers with the correct argument', async () => {
      instance.createMembers = jest.fn();
      await instance.fetchClub();
      expect(instance.createMembers).toHaveBeenCalledWith([1, 2]);
    });

    it('Should call addMembers with the corrrect argument if the promise resolves', async () => {
      instance.createMembers = jest.fn(ids => ids);
      await instance.fetchClub();
      expect(instance.props.addMembers).toHaveBeenCalledWith([1, 2]);
    });

  });

  describe('createMembers', () => {
    const memberIDs = [1, 2];

    it.skip('Should return a member list', async () => {
      instance.fetchUser = jest.fn(num => num * 2);
      const create = await instance.createMembers(memberIDs);
      expect(create).toHaveReturnedWith([2, 4]);
    });

    it('Should call fetchUser for each member', async () => {
      instance.fetchUser = jest.fn(num => num * 2);
      await instance.createMembers(memberIDs);
      expect(instance.fetchUser).toHaveBeenCalledTimes(2);
    });

  });

});
