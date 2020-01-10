export const getUserInfo = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error getting your information.');
  }
  const playerInfo = await response.json();
  return playerInfo;
}

export const getThousandClub = async (url) => {
  let fullURL = `https://cors-anywhere.herokuapp.com/${url}`;
  const response = await fetch(fullURL);
  if (!response.ok) {
    throw new Error('There was an error getting your information.');
  }
  const playerInfo = await response.json();
  return playerInfo;
}
