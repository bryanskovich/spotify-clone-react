import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';
function Header({ spotify }) {
    const [ { user } ] = useDataLayerValue();
	return (
		<div className='header'>
			<div className='header__left'>
				<SearchIcon />
				<input placeholder='Search for artist ,songs or podcast' />
			</div>
			<div className='header__right'>
				<Avatar src='http://www.bryanskovich.me/images/bryanskovich.jpg' alt='Bryanskovich' />
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
}

export default Header;
