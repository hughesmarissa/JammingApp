const clientId = 'dad36e3c4f7448c796a1a16968d8078c';
const redirectUri = 'http://locahost:3000/';

let accessToken; 

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    //check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accesTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      //this is going to clear the parametes and allow to grab new access token when it expires.
      window.setTimeout(() => accessToken = '', expiresIn *1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}D&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
      window.location = accessUrl;
    }
  }
};

export default Spotify;