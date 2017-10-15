import React, { Component } from 'react';

class ImageBlock extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<img src={this.props.img} alt='' />
			</div>
		);
	}
}

export default ImageBlock;