import React, { Component } from 'react';
import './index.css';

import { connect } from 'react-redux';

import { Grid, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';

import MainInfo from '../../components/MainInfo';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Text from '../../components/Text';

import {
	setTitle,
	setText,
	setCardTitle,
	setCardText
} from '../../../redux/actions/site';

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
	constructor(props) {
		super(props);

		this.setTitle = this.setTitle.bind(this);
		this.setText = this.setText.bind(this);
	}

	setTitle(e) {
		this.props.dispatch(setTitle('works', e.target.value));
	}

	setText(e) {
		this.props.dispatch(setText('works', e.target.value));
	}

	setCardTitle(i, e) {
		this.props.dispatch(setCardTitle(i, e.target.value));
	}

	setCardText(i, e) {
		this.props.dispatch(setCardText(i, e.target.value));
	}

	renderCardInfo(i, title, text) {
		return (
			<div className='CardInfo'>
				<Title editable={this.props.editable}
					   className='CardInfo-title'
					   title={title} onChange={this.setCardTitle.bind(this, i)} />
				<Text editable={this.props.editable}
					  className='CardInfo-text'
					  text={text} onChange={this.setCardText.bind(this, i)} />
			</div>
		);
	}

	renderCard(item, i) {
		const cards = [
			require('../../img/figures/img1.png'),
			require('../../img/figures/img2.png')
		];
		return (
			<Col lg={6} md={6} sm={6} xs={12} className='Card' key={i}>
				<Image className='Card-img' img={cards[i]} />
				{this.renderCardInfo(i, item.title, item.text)}
			</Col>
		);
	}

	renderSlide(item, i) {
		return (
			<Col lg={3} key={i}>
				<img className='LatestWorks-item' src={item} alt='' />
			</Col>
		);
	}

	render() {
		const settings = {
			arrows: false,
			dots: true,
			infinite: false,
			speed: 500,
			responsive: [
				{
					breakpoint: 450,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 10000,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				}
			]
		};
		const {
			editable,
			works: {
				info={},
				cards=[]
			}
		} = this.props;
		return (
			<div className='LatestWorks one-center'>
				<Grid>
					<Row>
						<MainInfo editable={editable}
								  titleClass='LatestWorks-title'
								  title={info.title} onChangeTitle={this.setTitle}
								  textClass='LatestWorks-text'
								  text={info.text} onChangeText={this.setText} />
					</Row>
					<Row className='LatestWorks-cards'>
						{cards.map(this.renderCard, this)}
					</Row>
					<Row className='LatestWorks-list'>
						<Slider {...settings}>
							{list.map(this.renderSlide, this)}
						</Slider>
					</Row>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		editable: state.admin.editable,
		works: state.site.data.works || {}
	};
};

export default connect(mapStateToProps)(LatestWorks);