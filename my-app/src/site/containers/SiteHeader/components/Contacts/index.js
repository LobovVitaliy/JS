import React, { Component } from 'react';
import './index.css';

import Col from 'react-bootstrap/lib/Col';
import AutosizeInput from 'react-input-autosize';

class Contacts extends Component {
	renderMail() {
		const { editable, mail, onChangeMail } = this.props;
		if (editable) {
			return (
				<AutosizeInput className='Contacts-mail edit'
							   value={mail}
							   onChange={onChangeMail} />
			);
		} else {
			return <a className='Contacts-mail' href='#mail'>{mail}</a>;
		}
	}

	renderPhone() {
		const { editable, phone, onChangePhone } = this.props;
		if (editable) {
			return (
				<AutosizeInput className='Contacts-phone edit'
							   value={phone}
							   onChange={onChangePhone} />
			);
		} else {
			return (
				<span className='Contacts-phone'>{phone}</span>
			);
		}
	}

	render() {
		return (
			<Col lg={9} className='Contacts one-center'>
				{this.renderMail()}
				{this.renderPhone()}
			</Col>
		);
	}
}

export default Contacts;