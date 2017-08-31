import React, { Component } from 'react';
import './LatestWorks.css';

import { Grid, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';

import MainInfo from '../MainInfo/MainInfo';
import Card from '../Card/Card';

const info = {
	title: 'Check out our latest works',
	text:  'Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor.'
}
const cards = [
	{
		img:   require('../../img/figures/img1.png'),
		title: 'Grand Motel gets an identity brushup',
		text:  'Identity'
	},
	{
		img:   require('../../img/figures/img2.png'),
		title: 'Fresh branding for a creative startup',
		text:  'Identity'
	}
];
const list = [
	require('../../img/carousel/items/img1.png'),
	require('../../img/carousel/items/img2.png'),
	require('../../img/carousel/items/img3.png'),
	require('../../img/carousel/items/img4.png'),
	require('../../img/carousel/items/img2.png'),
	require('../../img/carousel/items/img3.png'),
	require('../../img/carousel/items/img4.png'),
	require('../../img/carousel/items/img1.png')
];

class LatestWorks extends Component {
	constructor() {
		super();
		this.state = { column: 4 };
	}
	update() {
		if (window.innerWidth >= 992) {
			this.setState({ column: 4 });
		} else if (window.innerWidth >= 768) {
			this.setState({ column: 3 });
		} else if (window.innerWidth >= 500) {
			this.setState({ column: 2 });
		} else {
			this.setState({ column: 1 });
		}
	}
	componentDidMount() {
		this.update();
		window.addEventListener("resize", this.update.bind(this));
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.update.bind(this));
	}

	render() {
		var settings = {
			arrows: false,
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: this.state.column,
			slidesToScroll: this.state.column
		};
		return (
			<div className='LatestWorks'>
				<Grid className='many-center'>
					<Row className='LatestWorks-main'>
						<MainInfo titleClass='LatestWorks-title'
								  title={info.title}
								  textClass='LatestWorks-text'
								  text={info.text} />
					</Row>
					<Row className='LatestWorks-cards'>
						{cards.map((card, i) => 
							<Card img={card.img}
								  title={card.title}
								  text={card.text}
								  key={i} />
						)}
					</Row>
					<Row className='LatestWorks-list'>
						<Slider {...settings}>
							{list.map((item, i) => {
								return (
									<Col lg={3} key={i}>
										<img className='LatestWorks-item'
											 src={item} alt='' />
									</Col>
								);
							})}
						</Slider>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default LatestWorks;

// import LatestWorks from '../LatestWorks/LatestWorks';