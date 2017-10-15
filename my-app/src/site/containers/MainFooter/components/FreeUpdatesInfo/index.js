import React, { Component } from 'react';
import './index.css';

import Text from '../../../../components/Text';

class FreeUpdatesInfo extends Component {
	renderForm() {
		return (
			<form className='Form'>
				<input className='Form-input' type='text'
					   placeholder='Enter your email address' />
				<button className='Form-btn'>subscribe</button>
			</form>
		);
	}

	render() {
		const { editable, text, onChangeText } = this.props;
		return (
			<div className='Content'>
				<Text editable={editable}
					  className='Content-text'
					  text={text}
					  onChange={onChangeText} />
				{this.renderForm()}
			</div>
		);
	}
}

export default FreeUpdatesInfo;