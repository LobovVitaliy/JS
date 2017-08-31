import React, { Component } from 'react';
import './SiteHeader.css';

import { Grid, Row } from 'react-bootstrap';

import Contacts from '../Contacts/Contacts';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

const info = {
	contacts: {
		link:  '#',
		mail:  'info@reen.com',
		phone: '+00 (123) 456 78 90'
	},
	networks: [
		{ link: '#', icon: 'icon-facebook' },
		{ link: '#', icon: 'icon-gplus' },
		{ link: '#', icon: 'icon-twitter' },
		{ link: '#', icon: 'icon-pinterest' },
		{ link: '#', icon: 'icon-behance' },
		{ link: '#', icon: 'icon-dribbble' }
	]
}

class SiteHeader extends Component {
	render() {
		return (
			<header className='SiteHeader visible-lg'>
				<Grid className='SiteHeader-grid'>
					<Row className='SiteHeader-main'>
						<Contacts info={info.contacts} />
						<SocialNetworks list={info.networks} />
					</Row>
				</Grid>
			</header>
		);
	}
}

export default SiteHeader;

// import SiteHeader from '../SiteHeader/SiteHeader';