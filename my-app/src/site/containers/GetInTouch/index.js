import React, { Component } from 'react';
import './index.css';

import { connect } from 'react-redux';

import { Grid, Row } from 'react-bootstrap';

import MainInfo from '../../components/MainInfo';
import MainBtn from '../../components/MainBtn';

import { setContactTitle, setContactText } from '../../../redux/actions/site';

class GetInTouch extends Component {
	constructor(props) {
		super(props);

		this.setTitle = this.setTitle.bind(this);
		this.setText = this.setText.bind(this);
	}

	setTitle(e) {
		this.props.dispatch(setContactTitle(e.target.value));
	}

	setText(e) {
		this.props.dispatch(setContactText(e.target.value));
	}

	render() {
		const {
			editable,
			contact: { title, text }
		} = this.props;
		return (
			<div className='GetInTouch one-center'>
				<Grid>
					<Row>
						<MainInfo editable={editable}
								  title={title} onChangeTitle={this.setTitle}
								  textClass='GetInTouch-text'
								  text={text} onChangeText={this.setText} />
						<MainBtn className='GetInTouch-btn' name ='get in touch' />
					</Row>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		editable: state.admin.editable,
		contact: state.site.data.contact || {}
	};
};

export default connect(mapStateToProps)(GetInTouch);