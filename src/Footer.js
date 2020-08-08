import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import Grid from '@material-ui/core/Grid';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';
function Footer() {
	return (
		<div className='footer'>
			<div className='footer__left'>
				<img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' className='footer__albumLogo'/>
				<div className='footer__songInfo'>
					<h4>No song is playing</h4>
					<p>...</p>
				</div>
			</div>
			<div className='footer__center'>
				<ShuffleIcon className='footer__green' />
				<SkipPreviousIcon className='footer__icon' />
				<PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
				<SkipNextIcon className='footer__icon' />
				<RepeatIcon className='footer__icon' />
			</div>
			<div className='footer__right'>
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
