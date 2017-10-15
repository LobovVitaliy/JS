import React, { Component } from 'react';
import './index.css';

import Col from 'react-bootstrap/lib/Col';

class MainBtn extends Component {
	render() {
		return (
			<Col lg={12} md={12} className='MainBtn'>
				<button className={this.props.className}>{this.props.name}</button>
			</Col>
		);
	}
}

export default MainBtn;