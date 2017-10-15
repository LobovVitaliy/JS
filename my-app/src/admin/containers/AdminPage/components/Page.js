import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Site from '../../../../site';
// import List from '../../List';

class Page extends Component {
	render() {
		return (
			<div style={{ position: 'relative', top: 64 }}>
				<Switch>
					<Route exact path='/admin/site' component={Site} />
					<Redirect from='/admin' to='/admin/site' />
				</Switch>
			</div>
		);
	}
}

export default Page;