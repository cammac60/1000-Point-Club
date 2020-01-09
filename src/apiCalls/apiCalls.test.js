import { getUserInfo } from './apiCalls';

describe('getUserInfo', () => {
  const mockURL = 'http://url.url';
  const mockUserData = {
    data: 'data'
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockUserData)
        }
      })
    });

  });

  it('Should return a user object', () => {
    expect(getUserInfo(mockURL)).resolves.toEqual(mockUserData);
  });

  it('Should return an error for responses that are not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(getUserInfo(mockURL)).rejects.toEqual(Error('There was an error getting your information.'));
  });

  it('Should return an error if the fetch is rejected' ,() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('There was an error getting your information.'))
    });
    expect(getUserInfo(mockURL)).rejects.toEqual(Error('There was an error getting your information.'))
  });

});
