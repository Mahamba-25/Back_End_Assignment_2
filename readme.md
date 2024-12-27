# Spotify Song Search

## Overview
This project allows users to search for songs or artists using the Spotify API. The results include the song name, artist(s), album, and a link to listen on Spotify.

## Features
- Input form for song or artist search.
- Fetches results using Spotify's Track Search API.
- Displays song details dynamically on the page.

## Installation

1. Clone the repository:
   git clone
2. Navigate to the project directory:
   cd spotify-song-search
3. Install dependencies:
   npm i spotify-web-api-node
   npm install express body-parser spotify-web-api-node dotenv
   (unnecessary)npm install spotify-web-api-node dotenv
4. Create a `.env` file and add your Spotify API credentials:
   SPOTIFY_CLIENT_ID=your_spotify_client_id SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

## Usage

1. Start the server:
   node server.js
2. Open your browser and navigate to:
   http://localhost:3000

## License
This project is open source and available under the [MIT License](LICENSE).
