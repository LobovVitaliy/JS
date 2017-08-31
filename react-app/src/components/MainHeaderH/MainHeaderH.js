import React, { Component } from 'react';
import './MainHeaderH.css';

import { Grid, Row, Col } from 'react-bootstrap';

import Logo from '../Logo/Logo';
import Toggle from '../Toggle/Toggle';
import Menu from '../Menu/Menu';

class MainHeaderH extends Component {
	render() {
		return (
			<div className='MainHeaderH'>
				<Grid className='MainHeaderH-grid'>
					<Row className='one-center'>
						<Col lg={2} md={2} sm={2} xs={2}>
							<Logo logo={this.props.info.logo} />
						</Col>
						<Col lg={10} md={10} sm={10} xs={10}>
							<Toggle className='hidden-lg'
									onClick={this.props.toggleClick} />
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

// import MainHeaderH from '../MainHeaderH/MainHeaderH';