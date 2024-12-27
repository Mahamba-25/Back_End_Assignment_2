const SpotifyWebApi = require('spotify-web-api-node');

// Spotify API initialization
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

spotifyApi.clientCredentialsGrant()
    .then(data => {
        spotifyApi.setAccessToken(data.body['access_token']);
        console.log('Spotify access token set successfully.');
    })
    .catch(err => console.error('Error fetching Spotify access token:', err));

// Function to search tracks
async function searchTracks(query) {
    const data = await spotifyApi.searchTracks(query);
    return data.body.tracks.items.map(track => ({
        name: track.name,
        artists: track.artists.map(artist => artist.name).join(', '),
        album: track.album.name,
        link: track.external_urls.spotify,
    }));
}

module.exports = { searchTracks };
