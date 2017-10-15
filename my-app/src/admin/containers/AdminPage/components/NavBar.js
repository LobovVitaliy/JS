import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';

class NavBar extends Component {
	renderLeftIcon() {
		return this.props.open ? <IconButton><NavigationClose /></IconButton> : null;
	}

	renderRightIcon() {
		return (
			<IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
					  targetOrigin={{ horizontal: 'right', vertical: 'top' }}
					  anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
				<MenuItem primaryText='Save' onClick={this.props.handleSave} />
				<Divider />
				<MenuItem primaryText='Logout' onClick={this.props.handleLogout} />
			</IconMenu>
		);
	}

	render() {
		return (
			<AppBar style={{ position: 'fixed', top: 0 }}
					title='Admin'
					iconElementLeft={this.renderLeftIcon()}
					iconElementRight={this.renderRightIcon()}
					onLeftIconButtonTouchTap={this.props.handleShowMenu} />
		);
	}
}

export default NavBar;