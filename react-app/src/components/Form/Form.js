import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
	render() {
		return (
			<form className='Form' action={this.props.action}>
				<input className='Form-input' type='text'
					   placeholder={this.props.placeholder} />
				<button className='Form-btn'>{this.props.btn}</button>
			</form>
		);
	}
}

export default Form;

// import Form from '../Form/Form';