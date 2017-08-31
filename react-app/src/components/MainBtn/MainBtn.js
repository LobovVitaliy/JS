import React, { Component } from 'react';
import './MainBtn.css';

import Col from 'react-bootstrap/lib/Col';

class MainBtn extends Component {
	render() {
		return (
			<Col lg={12} className='MainBtn'>
				<button className={this.props.className}>{this.props.name}</button>
			</Col>
		);
	}
}

export default MainBtn;

// import MainBtn from '../MainBtn/MainBtn';