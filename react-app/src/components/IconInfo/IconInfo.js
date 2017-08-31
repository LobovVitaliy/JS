import React, { Component } from 'react';
import './IconInfo.css';

import { Row, Col } from 'react-bootstrap';

import IconBlock from '../IconBlock/IconBlock';
import MainInfo from '../MainInfo/MainInfo';

class IconInfo extends Component {
	render() {
		return (
			<Col lg={4} md={4} sm={12}>
				<Row>
					<IconBlock icon={this.props.item.icon} />
					<MainInfo lg={9} md={9}
							  titleClass='IconInfo-title'
							  title={this.props.item.title}
							  textClass='IconInfo-text'
							  text={this.props.item.text} />
				</Row>
			</Col>
		);
	}
}

export default IconInfo;

// import IconInfo from '../IconInfo/IconInfo';