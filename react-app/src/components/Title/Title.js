import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
	render() {
		const className = this.props.className || 'title';
		return <div className={className}>{this.props.title}</div>;
	}
}

export default Title;

// import Title from '../Title/Title';