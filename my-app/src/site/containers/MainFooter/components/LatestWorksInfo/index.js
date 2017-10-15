import React, { Component } from 'react';
import './index.css';

import Col from 'react-bootstrap/lib/Col';

import Image from '../../../../components/Image';

class LatestWorksInfo extends Component {
	renderImage(item, i) {
		return (
			<Col lg={6} md={6} sm={6} xs={6} className='thumb' key={i}>
				<Image img={item} />
			</Col>
		);
	}

	render() {
		const list = [
			require('../../../../img/thumbs/img1.png'),
			require('../../../../img/thumbs/img2.png'),
			require('../../../../img/thumbs/img3.png'),
			require('../../../../img/thumbs/img4.png')
		];
		return (
			<div className='Content'>
				{list.map(this.renderImage, this)}
			</div>
		);
	}
}

export default LatestWorksInfo;