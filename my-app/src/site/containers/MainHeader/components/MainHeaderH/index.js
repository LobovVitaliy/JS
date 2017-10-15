import React, { Component } from 'react';
import './index.css';

import { Grid, Row, Col } from 'react-bootstrap';

import Logo from '../../../../components/Logo';
import Menu from '../../../../components/Menu';

class MainHeaderH extends Component {
	renderToggle() {
		return (
			<button className={`Toggle hidden-lg`}
					onClick={this.props.toggleClick}>
				<i className='Toggle-line'></i>
				<i className='Toggle-line'></i>
				<i className='Toggle-line'></i>
			</button>
		);
	}

	render() {
		return (
			<div className='MainHeaderH'>
				<Grid className='MainHeaderH-grid'>
					<Row className='one-center'>
						<Col lg={2} md={2} sm={2} xs={2}>
							<Logo logo={this.props.info.logo} />
						</Col>
						<Col lg={10} md={10} sm={10} xs={10}>
							{this.renderToggle()}
							<Menu navClass='MainHeaderH-nav visible-lg'
								  listClass='MainHeaderH-list'
								  itemClass='MainHeaderH-item'
								  linkClass='MainHeaderH-link'
								  list={this.props.info.menu} />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default MainHeaderH;