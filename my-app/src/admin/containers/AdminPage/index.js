import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setEditable } from '../../../redux/actions/admin';
import { saveAll } from '../../../redux/actions/site';
import { logoutUser } from '../../../redux/actions/auth';

import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Page from './components/Page';

class AdminPage extends Component {
	constructor(props) {
		super(props);

		this.state = { open: false };

		this.handleSave = this.handleSave.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleShowMenu = () => {
		this.setState({ open: !this.state.open })
	}

	handleSave() {
		this.props.onSave(this.props.site);
	}

	handleLogout() {
		const { history, onLogout, setEditableFalse } = this.props;
		history.push('/');
		onLogout();
		setEditableFalse();
	}

	render() {
		const open = this.state.open;
		return (
			<div>
				<NavBar open={open}
						handleShowMenu={this.handleShowMenu}
						handleSave={this.handleSave}
						handleLogout={this.handleLogout} />
				<Menu open={open} />
				<Page />
			</div>
		);
	}
}

AdminPage.propTypes = {
	onLogout: PropTypes.func.isRequired,
	setEditableFalse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return {
		site: state.site.data
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSave: (site) => {
			dispatch(saveAll(site));
		},
		onLogout: () => {
			dispatch(logoutUser());
		},
		setEditableFalse: () => {
			dispatch(setEditable(false));
		}
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminPage));