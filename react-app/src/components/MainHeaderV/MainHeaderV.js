import React, { Component } from 'react';
import './MainHeaderV.css';

import { Grid, Row, Col } from 'react-bootstrap';

import Menu from '../Menu/Menu';

class MainHeaderV extends Component {
	render() {
		const visible = this.props.visible ? 'MainHeaderV-v' : 'MainHeaderV-h';
		return (
			<div className={`MainHeaderV ${visible} hidden-lg`}>
				<Grid>
					<Row>
						<Col lg={12}>
							<Menu navClass='MainHeaderV-menu'
								  itemClass='MainHeaderV-item'
								  linkClass='MainHeaderV-link'
								  list={this.props.list} />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default MainHeaderV;

// import MainHeaderV from '../MainHeaderV/MainHeaderV';