import React, { Component } from 'react';
import './MainInfo.css';

import Col from 'react-bootstrap/lib/Col';

import Title from '../Title/Title';
import Text from '../Text/Text';

class MainInfo extends Component {
	render() {
		const lg = this.props.lg || 12;
		const md = this.props.md || 12;
		// const sm = this.props.sm || 12;
		// const xs = this.props.xs || 12;
		return (
			<Col lg={lg} md={md} className='MainInfo'>
				<Title className={this.props.titleClass} title={this.props.title} />
				<Text className={this.props.textClass} text={this.props.text} />
			</Col>
		);
	}
}

export default MainInfo;

// import MainInfo from '../MainInfo/MainInfo';