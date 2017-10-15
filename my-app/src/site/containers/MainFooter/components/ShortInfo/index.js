import React, { Component } from 'react';
import './index.css';

import Col from 'react-bootstrap/lib/Col';

import Title from '../../../../components/Title';

class ShortInfo extends Component {
	render() {
		const { editable, title, children, onChangeTitle } = this.props;
		return (
			<Col lg={3} md={3} sm={6} xs={12}>
				<Title editable={editable}
					   className='ShortInfo-title'
					   title={title} onChange={onChangeTitle} />
				{children}
			</Col>
		);
	}
}

export default ShortInfo;