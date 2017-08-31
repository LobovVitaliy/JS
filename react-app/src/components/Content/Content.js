import React, { Component } from 'react';
import './Content.css';

import WhoWeAreInfo from '../WhoWeAreInfo/WhoWeAreInfo';
import LatestWorksInfo from '../LatestWorksInfo/LatestWorksInfo';
import GetInTouchInfo from '../GetInTouchInfo/GetInTouchInfo';
import FreeUpdatesInfo from '../FreeUpdatesInfo/FreeUpdatesInfo';

const components = [
	WhoWeAreInfo,
	LatestWorksInfo,
	GetInTouchInfo,
	FreeUpdatesInfo
];

class Content extends Component {
	render() {
		const SpecificInfo = components[this.props.id];
		return <SpecificInfo />;
	}
}

export default Content;

// import Content from '../Content/Content';