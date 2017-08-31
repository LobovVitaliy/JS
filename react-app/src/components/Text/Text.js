import React, { Component } from 'react';
import './Text.css';

class Text extends Component {
	render() {
		const className = this.props.className || 'text';
		return <div className={className}>{this.props.text}</div>;
	}
}

export default Text;

// import Text from '../Text/Text';