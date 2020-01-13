import React from 'react';
import { shallow } from 'enzyme';
import { Club, mapStateToProps, mapDispatchToProps} from './Club.js';
import { addSelectedPlayer } from '../../actions';

jest.mock('../../apiCalls/apiCalls');

describe('Club', () => {
  let wrapper, instance;
  const addSelectedPlayer = jest.fn();
  const mockProps = {
    members: [
      {
        stats: {
          points: 1,
          games: 1,
          goals: 1,
          assists: 0
        },
        id: 1,
        birthStateProvince: 'state',
        birthCity: 'city',
        birthCountry: 'USA',
        name: 'name',
        birthDate: 'date'
      },
      {
        stats: {
          points: 2,
          games: 1,
          goals: 1,
          assists: 0
        },
        id: 2,
        birthStateProvince: 'state',
        birthCity: 'city',
        birthCountry: 'CAN',
        name: 'name',
        birthDate: 'date'
      }
    ],
    addSelectedPlayer
  };
  const mockEvent = {
    target: {
      id: 1
    }
  };

  beforeEach(() => {
    wrapper = shallow(<Club {...mockProps}/>);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call addPlayerToSelected on click of the link', () => {
    instance.addPlayerToSelected = jest.fn();
    wrapper.find('.versus-link').first().simulate('click');
    expect(instance.addPlayerToSelected).toHaveBeenCalled();
  });

  describe('sortMembers', () => {

    it('Should return an array of users sorted by points', () => {
      const result = instance.sortMembers(instance.props.members);
      expect(result).toEqual([
        {
          stats: {
            points: 2,
            games: 1,
            goals: 1,
            assists: 0
          },
          id: 2,
          birthStateProvince: 'state',
          birthCity: 'city',
          birthCountry: 'CAN',
          name: 'name',
          birthDate: 'date'
        },
        {
          stats: {
            points: 1,
            games: 1,
            goals: 1,
            assists: 0
          },
          id: 1,
          birthStateProvince: 'state',
          birthCity: 'city',
          birthCountry: 'USA',
          name: 'name',
          birthDate: 'date'
        }
      ]);
    });

  });

  describe('addPlayerToSelected', () => {

    it('Should call the addSelectedPlayer method with the correct argument', async () => {
      await instance.addPlayerToSelected(mockEvent);
      expect(addSelectedPlayer).toHaveBeenCalledWith(mockProps.members[1]);
    });

  });

});
