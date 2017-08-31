import React, { Component } from 'react';
import './HeroHeader.css';

import { Grid, Row } from 'react-bootstrap';
import Slider from 'react-slick';

import MainInfo from '../MainInfo/MainInfo';
import MainBtn from '../MainBtn/MainBtn';

const info = {
	title: 'made for designers',
	text:  `Create your online portfolio in minutes with the professionally
			and lovingly designed REEN website template. Customize your site
			with versatile and easy to use features.`
};
const list =[
	require('../../img/carousel/heroes/img1.png'),
	require('../../img/carousel/heroes/img2.png'),
	require('../../img/carousel/heroes/img3.png'),
	require('../../img/carousel/heroes/img4.png'),
	require('../../img/carousel/heroes/img5.png')
];

class HeroHeader extends Component {
	render() {
		var settings = {
			arrows: false,
			dots: true,
			infinite: false
		};
		return (
			<Slider {...settings}>
				{list.map((item, i) => {
					return (
						<div className='HeroHeader-slider' key={i}>
							<div className='HeroHeader-img'
								 style={{backgroundImage: `url(${item})`}} />
							<Grid className='one-center HeroHeader-content'>
								<Row>
									<MainInfo titleClass='HeroHeader-title'
											  title={info.title}
											  textClass='HeroHeader-text'
											  text={info.text} />
									<MainBtn className='HeroHeader-btn'
											 name ='get started now' />
								</Row>
							</Grid>
						</div>
					);
				})}
			</Slider>
		);
	}
}

export default HeroHeader;

// import HeroHeader from '../HeroHeader/HeroHeader';