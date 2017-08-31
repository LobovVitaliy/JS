import React, { Component } from 'react';
import './Contacts.css';

import Col from 'react-bootstrap/lib/Col';

class Contacts extends Component {
	render() {
		return (
			<Col lg={9} className='Contacts one-center'>
				<a className='Contacts-mail' href={this.props.info.link}>
					{this.props.info.mail}
				</a>
				<span className='Contacts-phone'>{this.props.info.phone}</span>
			</Col>
		);
	}
}

export default Contacts;

// import Contacts from '../Contacts/Contacts';