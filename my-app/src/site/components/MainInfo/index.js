import React, { Component } from 'react';
import './index.css';

import Col from 'react-bootstrap/lib/Col';

import Title from '../Title';
import Text from '../Text';

class MainInfo extends Component {
	render() {
		const {
			lg=12, md=12,
			titleClass, title, onChangeTitle,
			textClass, text, onChangeText,
			editable
		} = this.props;
		return (
			<Col lg={lg} md={md} className='MainInfo'>
				<Title editable={editable}
					   className={titleClass}
					   title={title}
					   onChange={onChangeTitle} />
				<Text editable={editable}
					  className={textClass}
					  text={text}
					  onChange={onChangeText} />
			</Col>
		);
	}
}

export default MainInfo;