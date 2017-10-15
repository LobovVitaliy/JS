import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AdminPage from './containers/AdminPage'; 
import AdminLogin from './containers/AdminLogin';

class Admin extends Component {
	render() {
		return (
			<MuiThemeProvider>
				{this.props.isLoggedIn ? <AdminPage /> : <AdminLogin />}
			</MuiThemeProvider>
		);
	}
}

Admin.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.auth.isLoggedIn
	};
};

export default connect(mapStateToProps)(Admin);