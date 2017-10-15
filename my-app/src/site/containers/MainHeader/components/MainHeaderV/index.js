import React, { Component } from 'react';
import './index.css';

import { Grid, Row, Col } from 'react-bootstrap';

import Menu from '../../../../components/Menu';

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