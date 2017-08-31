import React, { Component } from 'react';
import './Card.css';

import Col from 'react-bootstrap/lib/Col';

import ImageBlock from '../ImageBlock/ImageBlock';
import CardBlock from '../CardBlock/CardBlock';

class Card extends Component {
	render() {
		return (
			<Col lg={6} md={6} sm={6} xs={12} className='Card'>
				<ImageBlock className='Card-img' img={this.props.img} />
				<CardBlock title={this.props.title} text={this.props.text} />
			</Col>
		);
	}
}

export default Card;

// import Card from '../Card/Card';