import React, { Component } from 'react';
import './FreeUpdatesInfo.css';

import Text from '../Text/Text';
import Form from '../Form/Form';

const info = {
	text: `Conecus iure posae volor remped modis aut
		   lor volor accabora incim resto explabo.`,
	form: {
		action:      '',
		placeholder: 'Enter your email address',
		btn:         'subscribe'
	}
}

class FreeUpdatesInfo extends Component {
	render() {
		return (
			<div className='Content'>
				<Text className='Content-text' text={info.text} />
				<Form action={info.form.action}
					  placeholder={info.form.placeholder}
					  btn={info.form.btn} />
			</div>
		);
	}
}

export default FreeUpdatesInfo;

// import FreeUpdatesInfo from '../FreeUpdatesInfo/FreeUpdatesInfo';