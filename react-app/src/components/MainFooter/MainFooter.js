import React, { Component } from 'react';
import './MainFooter.css';

import { Grid, Row } from 'react-bootstrap';

import ShortInfo from '../ShortInfo/ShortInfo';

const list = [
	{ title: 'who we are' },
	{ title: 'latest works' },
	{ title: 'get in touch' },
	{ title: 'free updates' }
];

class MainFooter extends Component {
	render() {
		return (
			<footer className='MainFooter'>
				<Grid className='one-center'>
					<Row className='MainFooter-main'>
						{list.map((item, i) =>
							<ShortInfo info={item} id={i} key={i} />
						)}
					</Row>
				</Grid>
			</footer>
		);
	}
}

export default MainFooter;

// import MainFooter from '../MainFooter/MainFooter';