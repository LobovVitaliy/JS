import React, { Component } from 'react';
import './index.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginUser, LOGIN_RESET } from '../../../redux/actions/auth';

import AdminForm from './components/AdminForm';
import Notice from './components/Notice';

class AdminLogin extends Component {
	constructor(props) {
		super(props);

		this.onLogin = this.props.onLogin.bind(this);
		this.onRequestClose = this.props.onRequestClose.bind(this);
	}

	render() {
		return (
			<div className='AdminLogin'>
				<AdminForm onLogin={this.onLogin} />
				<Notice error={this.props.error}
						onRequestClose={this.onRequestClose} />
			</div>
		);
	}
}

AdminLogin.propTypes = {
	onLogin: PropTypes.func.isRequired,
	onRequestClose: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
	return {
		error: state.auth.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLogin: (username, password) => {
			dispatch(loginUser({ username, password }));
		},
		onRequestClose: () => {
			dispatch({ type: LOGIN_RESET });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);