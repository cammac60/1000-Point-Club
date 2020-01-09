export const getUserInfo = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error getting your information.');
  }
  const playerInfo = await response.json();
  return playerInfo;
}
