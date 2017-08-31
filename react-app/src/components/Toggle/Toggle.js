import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {
	render() {
		return (
			<button className={`Toggle ${this.props.className}`}
					onClick={this.props.onClick}>
				<i className='Toggle-line'></i>
				<i className='Toggle-line'></i>
				<i className='Toggle-line'></i>
			</button>
		);
	}
}

export default Toggle;

// import Toggle from '../Toggle/Toggle';