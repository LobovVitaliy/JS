import React, { Component } from 'react';
import './ImageBlock.css';

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

// import ImageBlock from '../ImageBlock/ImageBlock';