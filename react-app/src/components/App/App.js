import React, { Component } from 'react';
import './App.css';

import SiteHeader from '../SiteHeader/SiteHeader';
import MainHeader from '../MainHeader/MainHeader';

import HeroHeader from '../HeroHeader/HeroHeader';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import LatestWorks from '../LatestWorks/LatestWorks';
import GetInTouch from '../GetInTouch/GetInTouch';

import MainFooter from '../MainFooter/MainFooter';
import SiteFooter from '../SiteFooter/SiteFooter';

import BtnToTop from '../BtnToTop/BtnToTop';

class App extends Component {
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

				<BtnToTop />
			</div>
		);
	}
}

export default App;