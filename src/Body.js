import React from 'react';
import './Body.css';
import Header from './Header'
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow'
function Body({ spotify }) {
    const [ {discoverWeekly } ] = useDataLayerValue();
	return (
		<div className='body'>
			<Header spotify={spotify}/>
            <div className="body__info">
                <img src={discoverWeekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover weekly</h2>
                    <p>{discoverWeekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon  className='body__shuffle'/>
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>
                {discoverWeekly?.tracks.items.map(item=>(
                    <SongRow track={item.track}/>
                ))}

            </div>
		</div>
	);
}

export default Body;
