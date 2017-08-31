import React, { Component } from 'react';
import './SocialNetworks.css';

import Col from 'react-bootstrap/lib/Col';

class SocialNetworks extends Component {
	render() {
		return (
			<Col lg={3} className='SocialNetworks'>
				{this.props.list.map((item, i) => {
					return (
						<a className='SocialNetworks-link' href={item.link} key={i}>
							<i className={`SocialNetworks-icon ${item.icon}`}></i>
						</a>
					);
				})}
			</Col>
		);
	}
}

export default SocialNetworks;

// import SocialNetworks from '../SocialNetworks/SocialNetworks';