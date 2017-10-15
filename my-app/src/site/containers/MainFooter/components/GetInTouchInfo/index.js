import React, { Component } from 'react';
import './index.css';

import AutosizeInput from 'react-input-autosize';

import Text from '../../../../components/Text';

class GetInTouchInfo extends Component {
	renderAddress() {
		const { editable, info: { address }, onChangeAddress } = this.props;
		if (editable) {
			return (
				<AutosizeInput className='GetInTouchInfo-address edit'
							   value={address}
							   onChange={onChangeAddress} />
			);
		} else {
			return <div className='GetInTouchInfo-address'>{address}</div>;
		}
	}

	renderPhone() {
		const { editable, info: { phone }, onChangePhone } = this.props;
		if (editable) {
			return (
				<AutosizeInput className='GetInTouchInfo-phone edit'
							   value={phone}
							   onChange={onChangePhone} />
			);
		} else {
			return <div className='GetInTouchInfo-phone'>{phone}</div>;
		}
	}

	renderMail() {
		const { editable, info: { mail }, onChangeMail } = this.props;
		if (editable) {
			return (
				<AutosizeInput className='GetInTouchInfo-mail edit'
							   value={mail}
							   onChange={onChangeMail} />
			);
		} else {
			return <a className='GetInTouchInfo-mail' href='#mail'>{mail}</a>;
		}
	}

	render() {
		const { editable, text, onChangeText } = this.props;
		return (
			<div className='Content'>
				<Text editable={editable}
					  className='Content-text'
					  text={text}
					  onChange={onChangeText} />
				<div className='GetInTouchInfo-contacts Content-text'>
					{this.renderAddress()}
					{this.renderPhone()}
					{this.renderMail()}
				</div>
			</div>
		);
	}
}

export default GetInTouchInfo;