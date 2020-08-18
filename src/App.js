import React from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
const spotify = new SpotifyWebApi();
function App() {
	const [ {  token }, dispatch ] = useDataLayerValue();
	//run code based on a given conditions
	React.useEffect(() => {
		//code...
		const hash = getTokenFromUrl();
		window.location.hash = '';
		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type: 'SET_TOKEN',
				token: _token
			});

			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => {
				console.log('person', user);
				dispatch({
					type: 'SET_USER',
					user: user
				});
			});
			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists: playlists
				});
      });
      spotify.getPlaylist("37i9dQZEVXcMD43l9loNpF").then((response)=> {
        console.log(response)
        dispatch({
					type: 'SET_DISCOVER_WEEKLY',
					discoverWeekly: response
				});
      })
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div className='app'>{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
