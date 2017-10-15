import React, { Component } from 'react';
import './index.css';

import Col from 'react-bootstrap/lib/Col';

class SocialNetworks extends Component {
	renderSocialNetwork(item, i) {
		return (
			<a className='SocialNetworks-link' href={item.link} key={i}>
				<i className={`SocialNetworks-icon ${item.icon}`}></i>
			</a>
		);
	}

	render() {
		return (
			<Col lg={3} className='SocialNetworks'>
				{this.props.networks.map(this.renderSocialNetwork, this)}
			</Col>
		);
	}
}

export default SocialNetworks;