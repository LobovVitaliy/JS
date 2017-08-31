import React, { Component } from 'react';
import './WhoWeAre.css';

import { Grid, Row } from 'react-bootstrap';

import MainInfo from '../MainInfo/MainInfo';
import IconInfo from '../IconInfo/IconInfo';

const info = {
	title: 'Beautiful. Clean. Responsive.',
	text:  `REEN is a high-quality solution for those who want
			a beautiful website in no time. It's fully responsive
			and will adapt itself to any mobile device. iPad,
			iPhone, Android, it doesn't matter. Your content will
			always looks its absolute best.`
}
const list = [
	{
		icon:  'heart',
		title: 'Passion',
		text:  `Magnis modipsae que lib voloratati andigen daepeditem
				quiate re porem aut labor. Laceaque quiae sitiorem rest
				non restibusaes maio es dem tumquam core posae volor
				remped modis volor.`
	},
	{
		icon:  'lightbulb',
		title: 'Creativity',
		text:  `Magnis modipsae que lib voloratati andigen daepeditem
				quiate re porem aut labor. Laceaque quiae sitiorem rest
				non restibusaes maio es dem tumquam core posae volor
				remped modis volor.`
	},
	{
		icon:  'star',
		title: 'Quality',
		text:  `Magnis modipsae que lib voloratati andigen daepeditem
				quiate re porem aut labor. Laceaque quiae sitiorem rest
				non restibusaes maio es dem tumquam core posae volor
				remped modis volor.`
	}
];

class WhoWeAre extends Component {
	render() {
		return (
			<div className='WhoWeAre'>
				<Grid className='many-center'>
					<Row className='WhoWeAre-main'>
						<MainInfo titleClass='WhoWeAre-title'
								  title={info.title}
								  textClass='WhoWeAre-text'
								  text={info.text} />
					</Row>
					<Row className='WhoWeAre-list'>
						{list.map((item, i) => <IconInfo item={item} key={i}/>)}
					</Row>
				</Grid>
			</div>
		);
	}
}

export default WhoWeAre;

// import WhoWeAre from '../WhoWeAre/WhoWeAre';