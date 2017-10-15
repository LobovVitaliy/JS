import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
// import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

class Menu extends Component {
	render() {
		return (
			<Drawer containerStyle={{ position: 'fixed', top: 64 }}
					open={this.props.open}
					width={200}>
				<MenuItem primaryText='Site'
						  containerElement={<Link to='/admin/site' />} />
				{/* <MenuItem primaryText='Sliders'
						  rightIcon={<ArrowDropRight />}
						  menuItems={[
							  <MenuItem primaryText='Get started'
							  			containerElement={<Link to='/admin/get-started' />} />,
							  <MenuItem primaryText='Latest works'
							  			containerElement={<Link to='/admin/latest-works' />} />
						  ]} /> */}
				<Divider />
				<MenuItem primaryText='Home Page'
						  containerElement={<Link to='/' />} />
				<Divider />
			</Drawer>
		);
	}
}

export default Menu;