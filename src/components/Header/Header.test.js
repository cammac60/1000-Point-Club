import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapDispatchToProps } from './Header.js';
import { removeUser } from '../../actions';

describe('Header', () => {
  let wrapper, instance;
  const removeUser = jest.fn();
  const mockProps = {
    removeUser,
    history: {
      push: jest.fn()
    }
  };

  beforeEach(() => {
    wrapper = shallow(<Header {...mockProps}/>);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('Should call logOut on click of the logout button', () => {
    instance.logOut = jest.fn();
    wrapper.find('.sign-out-button').simulate('click');
    expect(instance.logOut).toHaveBeenCalled();
  });

  describe('logOut', () => {

    it('Should call the removeUser method', () => {
      instance.logOut();
      expect(instance.props.removeUser).toHaveBeenCalled();
    });

    it('Should call history.push with the correct argument', () => {
      instance.logOut();
      expect(instance.props.history.push).toHaveBeenCalledWith('/');
    });

  });

});
