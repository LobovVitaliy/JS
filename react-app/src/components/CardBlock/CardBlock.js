import React, { Component } from 'react';
import './CardBlock.css';

import Title from '../Title/Title';
import Text from '../Text/Text';

class CardBlock extends Component {
	render() {
		return (
			<div className='CardBlock'>
				<Title className='CardBlock-title' title={this.props.title} />
				<Text className='CardBlock-text' text={this.props.text} />
			</div>
		);
	}
}

export default CardBlock;

// import CardBlock from '../CardBlock/CardBlock';