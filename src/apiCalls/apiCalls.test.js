import { getUserInfo, getThousandClub, getTeams } from './apiCalls';

describe('apiCalls', () => {
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

  describe('getUserInfo', () => {

    it('Should return a user object', () => {
      expect(getUserInfo(mockURL)).resolves.toEqual(mockUserData);
    });

    it('Should return an error for responses that are not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(getUserInfo(mockURL)).rejects.toEqual(Error('Opps! We couldn\'t find your profile. Please try again.'));
    });

    it('Should return an error if the fetch is rejected' ,() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('Opps! We couldn\'t find your profile. Please try again.'))
      });
      expect(getUserInfo(mockURL)).rejects.toEqual(Error('Opps! We couldn\'t find your profile. Please try again.'));
    });

  });

  describe('getThousandClub', () => {

    it('Should return a player object', () => {
      expect(getThousandClub(mockURL)).resolves.toEqual(mockUserData);
    });

    it('Should return an error for responses that are not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(getThousandClub(mockURL)).rejects.toEqual(Error('There was an error getting club members.'));
    });

    it('Should return and error if the fetch was rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('There was an error getting club members.'))
      });
      expect(getThousandClub(mockURL)).rejects.toEqual(Error('There was an error getting club members.'));
    });

  });

  describe('getTeams', () => {
    const mockTeams = [{id: 1}, {id: 2}];

    it('Should return an array of teams', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockTeams)
          }
        })
      });
      expect(getTeams()).resolves.toEqual(mockTeams);
    });

    it('Should return an error for responses that are not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(getTeams()).rejects.toEqual(Error('There was an error getting the teams.'));
    });

    it('Should return an error if the fetch was rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('There was an error getting the teams.'))
      });
      expect(getTeams()).rejects.toEqual(Error('There was an error getting the teams.'));
    });

  });

});
