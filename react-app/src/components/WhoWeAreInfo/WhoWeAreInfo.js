import React, { Component } from 'react';
import './WhoWeAreInfo.css';

import Logo from '../Logo/Logo';
import Text from '../Text/Text';

const info = {
	logo: {
		link: '',
		img:  require('../../img/logo-white.png')
	},
	text: `Magnis modipsae voloratati andigen daepeditem quiate
		   re porem que aut labor. Laceaque eictemperum quiae
		   sitiorem rest non restibusaes maio es dem tumquam.`,
	more: {
		link: '',
		text: 'More about us'
	}
}

class WhoWeAreInfo extends Component {
	render() {
		return (
			<div className='Content'>
				<div className='WhoWeAreInfo-logo'>
					<Logo logo={info.logo} />
				</div>
				<Text className='Content-text' text={info.text} />
				<div className='WhoWeAreInfo-more'>
					<a href={info.more.link}>{info.more.text}</a>
				</div>
			</div>
		);
	}
}

export default WhoWeAreInfo;

// import WhoWeAreInfo from '../WhoWeAreInfo/WhoWeAreInfo';