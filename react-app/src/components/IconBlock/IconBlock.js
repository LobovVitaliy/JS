import React, { Component } from 'react';
import './IconBlock.css';

import Col from 'react-bootstrap/lib/Col';

class IconBlock extends Component {
	render() {
		return (
			<Col lg={3} md={3}>
				<div className={`IconBlock ${this.props.icon}`}></div>
			</Col>
		);
	}
}

export default IconBlock;

// import IconBlock from '../IconBlock/IconBlock';