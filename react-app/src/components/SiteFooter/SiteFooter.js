import React, { Component } from 'react';
import './SiteFooter.css';

import { Grid, Row, Col } from 'react-bootstrap';

import Menu from '../Menu/Menu';

const info = {
	copyright: '2014 REEN. All rights reserved.'
}
const list = [
	{ text: 'Home',      link: '#' },
	{ text: 'Portfolio', link: '#' },
	{ text: 'Blog',      link: '#' },
	{ text: 'About',     link: '#' },
	{ text: 'Services',  link: '#' },
	{ text: 'Contact',   link: '#' }
];

class SiteFooter extends Component {
	render() {
		return (
			<footer className='SiteFooter'>
				<Grid className='many-center'>
					<Row>
						<Col lg={6} md={6} sm={5} xs={12}>
							<div className='copyright'>{info.copyright}</div>
						</Col>
						<Col lg={6} md={6} sm={7} xs={12}>
							<Menu navClass='SiteFooter-nav'
								  listClass='SiteFooter-list'
								  itemClass='SiteFooter-item'
								  list={list} />
						</Col>
					</Row>
				</Grid>
			</footer>
		);
	}
}

export default SiteFooter;

// import SiteFooter from '../SiteFooter/SiteFooter';