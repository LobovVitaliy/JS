import React, { Component } from 'react';
import './GetInTouchInfo.css';

import Text from '../Text/Text';

const info = {
	text:	 `Doloreiur quia commolu ptatemp dolupta oreprerum tibusam
			  eumenis et consent accullignis dentibea autem inisita.`,
	address: '84 Street, City, State 24813',
	phone:	 '+00 (123) 456 78 90',
	mail:	 'info@reen.com',
	link:	 ''
}

class GetInTouchInfo extends Component {
	render() {
		return (
			<div className='Content'>
				<Text className='Content-text' text={info.text} />
				<div className='GetInTouchInfo-contacts Content-text'>
					<div className='GetInTouchInfo-address'>{info.address}</div>
					<div className='GetInTouchInfo-phone'>{info.phone}</div>
					<a className='GetInTouchInfo-mail' href={info.link}>{info.mail}</a>
				</div>
			</div>
		);
	}
}

export default GetInTouchInfo;

// import GetInTouchInfo from '../GetInTouchInfo/GetInTouchInfo';