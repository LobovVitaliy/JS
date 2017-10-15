import React, { Component } from 'react';
import './index.css';

import TextField from 'material-ui/TextField';

class Field extends Component {
	render() {
		const { name, type='text', error, onChange } = this.props;
		const label = name.charAt(0).toUpperCase() + name.slice(1);
		return (
			<div className='Field'>
				<label className='Field-label'>{label}</label>
				<TextField name={name} type={type} 
						   errorText={error}
						   onChange={onChange} />
			</div>
		);
	}
}

export default Field;