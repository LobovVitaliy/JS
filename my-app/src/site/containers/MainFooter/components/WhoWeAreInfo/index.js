import React, { Component } from 'react';
import './index.css';

import Logo from '../../../../components/Logo';
import Text from '../../../../components/Text';

class WhoWeAreInfo extends Component {
	render() {
		const logo = {
			link: '#logo',
			img: require('../../../../img/logo-white.png')
		};
		const { editable, text, onChangeText } = this.props;
		return (
			<div className='Content'>
				<div className='WhoWeAreInfo-logo'>
					<Logo logo={logo} />
				</div>
				<Text editable={editable}
					  className='Content-text'
					  text={text}
					  onChange={onChangeText} />
				<div className='WhoWeAreInfo-more'>
					<a href='#about'>More about us</a>
				</div>
			</div>
		);
	}
}

export default WhoWeAreInfo;