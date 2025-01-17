export const APIController = (function() {
    
  const clientId = '74a6d2005d514270ae22abf84820ef76';
  const clientSecret = 'ae29cce1cbc24e80b8a185a9e26a0cb7';

  // private methods
  const _getToken = async () => {

      const result = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/x-www-form-urlencoded', 
              'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
          },
          body: 'grant_type=client_credentials'
      });

      const data = await result.json();
      return data.access_token;
  }
  
  const _getGenres = async (token) => {

      const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + token}
      });

      const data = await result.json();
      return data.categories.items;
  }

  const _getPlaylistByGenre = async (token, genreId) => {

      const limit = 10;
      
      const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + token}
      });

      const data = await result.json();
      return data.playlists.items;
  }

  const _getTracks = async (token, tracksEndPoint) => {

      const limit = 10;

      const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + token}
      });

      const data = await result.json();
      return data.items;
  }

  const _getTrack = async (token, trackEndPoint) => {

      const result = await fetch(`${trackEndPoint}`, {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + token}
      });

      const data = await result.json();
      return data;
  }
  const _getUserPlaylist = async (userId,token) => {

    const result = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        method: "GET",
        headers: { 
          Authorization: "Bearer " + token ,
          "Content-Type": "application/json",
        },
        
      }
    );

    const data = await result.json();
    return data;
}
  return {
      getToken() {
          return _getToken();
      },
      getGenres(token) {
          return _getGenres(token);
      },
      getPlaylistByGenre(token, genreId) {
          return _getPlaylistByGenre(token, genreId);
      },
      getTracks(token, tracksEndPoint) {
          return _getTracks(token, tracksEndPoint);
      },
      getTrack(token, trackEndPoint) {
          return _getTrack(token, trackEndPoint);
      },
      getUserPlaylist(userId,token) {
          return _getUserPlaylist(userId,token);
      }
  }
})();
