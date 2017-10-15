import React, { Component } from 'react';
import './index.css';

import { Grid, Row } from 'react-bootstrap';
import Slider from 'react-slick';

import MainInfo from '../../components/MainInfo';
import MainBtn from '../../components/MainBtn';

const list = [
	{
		url: require('../../img/carousel/heroes/img1.png'),
		title: 'made for designers',
		text:  `Create your online portfolio in minutes with the professionally and lovingly designed REEN website template. Customize your site with versatile and easy to use features.`
	},
	{
		url: require('../../img/carousel/heroes/img2.png'),
		title: 'made for designers',
		text:  `Create your online portfolio in minutes with the professionally and lovingly designed REEN website template. Customize your site with versatile and easy to use features.`
	},
	{
		url: require('../../img/carousel/heroes/img3.png'),
		title: 'made for designers',
		text:  `Create your online portfolio in minutes with the professionally and lovingly designed REEN website template. Customize your site with versatile and easy to use features.`
	},
	{
		url: require('../../img/carousel/heroes/img4.png'),
		title: 'made for designers',
		text:  `Create your online portfolio in minutes with the professionally and lovingly designed REEN website template. Customize your site with versatile and easy to use features.`
	},
	{
		url: require('../../img/carousel/heroes/img5.png'),
		title: 'made for designers',
		text:  `Create your online portfolio in minutes with the professionally and lovingly designed REEN website template. Customize your site with versatile and easy to use features.`
	}
];

class HeroHeader extends Component {
	renderSlide(item, i) {
		return (
			<div className='HeroHeader-slider' key={i}>
				<div className='HeroHeader-img'
					 style={{ backgroundImage: `url(${item.url})` }} />
				<Grid className='one-center HeroHeader-content'>
					<Row>
						<MainInfo titleClass='HeroHeader-title'
								  title={item.title}
								  textClass='HeroHeader-text'
								  text={item.text} />
						<MainBtn className='HeroHeader-btn'
								 name ='get started now' />
					</Row>
				</Grid>
			</div>
		);
	}

	render() {
		const settings = {
			arrows: false,
			dots: true,
			infinite: false
		};
		return (
			<Slider {...settings}>
				{list.map(this.renderSlide, this)}
			</Slider>
		);
	}
}

export default HeroHeader;