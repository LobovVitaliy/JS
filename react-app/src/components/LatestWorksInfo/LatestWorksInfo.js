import React, { Component } from 'react';
import './LatestWorksInfo.css';

import Col from 'react-bootstrap/lib/Col';

import ImageBlock from '../ImageBlock/ImageBlock';

const info = [
	require('../../img/thumbs/img1.png'),
	require('../../img/thumbs/img2.png'),
	require('../../img/thumbs/img3.png'),
	require('../../img/thumbs/img4.png')
];

class LatestWorksInfo extends Component {
	render() {
		return (
			<div className='Content clearfix'>
				{info.map((item, i) => {
					return (
						<Col lg={6} md={6} sm={6} xs={6} className='thumb' key={i}>
							<ImageBlock img={item} />
						</Col>
					);
				})}
			</div>
		);
	}
}

export default LatestWorksInfo;

// import LatestWorksInfo from '../LatestWorksInfo/LatestWorksInfo';