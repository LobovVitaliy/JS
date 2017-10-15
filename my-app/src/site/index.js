import React, { Component } from 'react';
import './index.css';

import SiteHeader from './containers/SiteHeader';
import MainHeader from './containers/MainHeader';

import HeroHeader from './containers/HeroHeader';
import WhoWeAre from './containers/WhoWeAre';
import LatestWorks from './containers/LatestWorks';
import GetInTouch from './containers/GetInTouch';

import MainFooter from './containers/MainFooter';
import SiteFooter from './containers/SiteFooter';

class Site extends Component {
	render() {
		return (
			<div>
				<SiteHeader />
				<MainHeader />
				<main>
					<HeroHeader />
					<WhoWeAre />
					<LatestWorks />
					<GetInTouch />
				</main>
				<MainFooter />
				<SiteFooter />
			</div>
		);
	}
}

export default Site;