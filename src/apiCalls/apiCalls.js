export const getUserInfo = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Opps! We couldn\'t find your profile. Please try again.');
  }
  const playerInfo = await response.json();
  return playerInfo;
}

export const getThousandClub = async (url) => {
  let fullURL = `https://cors-anywhere.herokuapp.com/${url}`;
  const response = await fetch(fullURL);
  if (!response.ok) {
    throw new Error('There was an error getting club members.');
  }
  const playerInfo = await response.json();
  return playerInfo;
}

export const getTeams = async () => {
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster');
  if (!response.ok) {
    throw new Error('There was an error getting the teams.');
  }
  const teams = await response.json();
  return teams;
}
