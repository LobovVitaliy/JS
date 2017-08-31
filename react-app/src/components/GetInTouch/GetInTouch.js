import React, { Component } from 'react';
import './GetInTouch.css';

import { Grid, Row } from 'react-bootstrap';

import MainInfo from '../MainInfo/MainInfo';
import MainBtn from '../MainBtn/MainBtn';

const info = {
	title: 'Want to work with us?',
	text:  `Magnis modipsae que voloratati andigen daepeditem
			quiate re porem aut labor. Laceaque quiae sitiorem
			rest non restibusaes maio es dem tumquam.`
}

class GetInTouch extends Component {
	render() {
		return (
			<div className='GetInTouch'>
				<Grid className='one-center'>
					<Row className='GetInTouch-main'>
						<MainInfo title={info.title}
								  textClass='GetInTouch-text'
								  text={info.text} />
						<MainBtn className='GetInTouch-btn' name ='get in touch' />
					</Row>
				</Grid>
			</div>
		);
	}
}

export default GetInTouch;

// import GetInTouch from '../GetInTouch/GetInTouch';