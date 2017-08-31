import React, { Component } from 'react';
import './ShortInfo.css';

import Col from 'react-bootstrap/lib/Col';

import Title from '../Title/Title';
import Content from '../Content/Content';

class ShortInfo extends Component {
	render() {
		return (
			<Col lg={3} md={3} sm={6} xs={12}>
				<Title className='ShortInfo-title' title={this.props.info.title} />
				<Content content={this.props.info.content} id={this.props.id} />
			</Col>
		);
	}
}

export default ShortInfo;

// import ShortInfo from '../ShortInfo/ShortInfo';