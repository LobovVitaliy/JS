import React, { Component } from 'react';
import './index.css';

class Logo extends Component {
	render() {
		return (
			<a className='Logo' href={this.props.logo.link}>
				<img src={this.props.logo.img} alt='Logo' />
			</a>
		);
	}
}

export default Logo;