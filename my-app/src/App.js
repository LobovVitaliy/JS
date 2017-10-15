import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setEditable } from './redux/actions/admin';

import Site from './site';
import Admin from './admin';

class App extends Component {
	componentWillReceiveProps(nextProps) {
		const {
			history: { location: { pathname } },
			isLoggedIn,
			editable,
			dispatch
		} = nextProps;

		if (!isLoggedIn) return;

		const isAdminPage = pathname.match(/^\/admin/);
		if (!editable && isAdminPage) {
			dispatch(setEditable(true));
		} else if (editable && !isAdminPage) {
			dispatch(setEditable(false));
		}
	}

	render() {
		return (
			<Switch>
				<Route exact path='/' component={Site} />
				<Route path='/admin' component={Admin} />
			</Switch>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.auth.isLoggedIn,
		editable: state.admin.editable
	};
};

export default withRouter(connect(mapStateToProps)(App));