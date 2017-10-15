import React, { Component } from 'react';
import './index.css';

import Field from './components/Field';

class AdminForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: {
				value: '',
				error: 'This field is required'
			},
			password: {
				value: '',
				error: 'This field is required'
			}
		};

		this.onChange = this.onChange.bind(this);
		this.login = this.login.bind(this);
	}

	onChange(e, value) {
		let error = '';
		if (!value) {
			error = 'This field is required';
		} else if (!value.match(/^\S{4,}$/)) {
			error = 'This field is not valid';
		}
		this.setState({ [e.target.name]: { value, error } });
	}

	login(e) {
		e.preventDefault();
		const { username, password } = this.state;
		if (!username.error && !password.error) {
			this.props.onLogin(username.value, password.value);
		}
	}

	render() {
		const { username, password } = this.state;
		return (
			<form className='AdminForm' onSubmit={this.login}>
				<div className='AdminForm-title'>Admin</div>
				<Field name='username'
					   error={username.error}
					   onChange={this.onChange} />
				<Field name='password' type='password'
					   error={password.error}
					   onChange={this.onChange} />
				<button className='AdminForm-btn' type='submit'>Login</button>
			</form>
		);
	}
}

export default AdminForm;