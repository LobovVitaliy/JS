import React, { Component } from 'react';
import './index.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Grid, Row } from 'react-bootstrap';

import ShortInfo from './components/ShortInfo';

import WhoWeAreInfo from './components/WhoWeAreInfo';
import LatestWorksInfo from './components/LatestWorksInfo';
import GetInTouchInfo from './components/GetInTouchInfo';
import FreeUpdatesInfo from './components/FreeUpdatesInfo';

import {
	setMail,
	setPhone,
	setAddress,
	setTotalTitle,
	setTotalText
} from '../../../redux/actions/site';

class MainFooter extends Component {
	constructor(props) {
		super(props);

		this.onChangeAddress = this.onChangeAddress.bind(this);
		this.onChangePhone = this.onChangePhone.bind(this);
		this.onChangeMail = this.onChangeMail.bind(this);
	}

	onChangeAddress(e) {
		this.props.dispatch(setAddress(e.target.value));
	}

	onChangePhone(e) {
		this.props.dispatch(setPhone(e.target.value));
	}

	onChangeMail(e) {
		this.props.dispatch(setMail(e.target.value));
	}

	setTotalTitle(block, e) {
		this.props.dispatch(setTotalTitle(block, e.target.value));
	}

	setTotalText(block, e) {
		this.props.dispatch(setTotalText(block, e.target.value));
	}

	render() {
		const {
			editable,
			total: {
				about={},
				works={},
				contact={},
				updates={}
			},
			info
		} = this.props;
		return (
			<footer className='MainFooter one-center'>
				<Grid>
					<Row className='MainFooter-main'>
						<ShortInfo editable={editable} title={about.title}
								   onChangeTitle={this.setTotalTitle.bind(this, 'about')}>
							<WhoWeAreInfo editable={editable} text={about.text}
										  onChangeText={this.setTotalText.bind(this, 'about')} />
						</ShortInfo>
						<ShortInfo editable={editable} title={works.title}
								   onChangeTitle={this.setTotalTitle.bind(this, 'works')}>
							<LatestWorksInfo />
						</ShortInfo>
						<ShortInfo editable={editable} title={contact.title}
								   onChangeTitle={this.setTotalTitle.bind(this, 'contact')}>
							<GetInTouchInfo editable={editable}
											text={contact.text}
											info={info}
											onChangeText={this.setTotalText.bind(this, 'contact')}
											onChangeAddress={this.onChangeAddress}
											onChangePhone={this.onChangePhone}
											onChangeMail={this.onChangeMail} />
						</ShortInfo>
						<ShortInfo editable={editable} title={updates.title}
								   onChangeTitle={this.setTotalTitle.bind(this, 'updates')}>
							<FreeUpdatesInfo editable={editable} text={updates.text}
											 onChangeText={this.setTotalText.bind(this, 'updates')}/>
						</ShortInfo>
					</Row>
				</Grid>
			</footer>
		);
	}
}

MainFooter.propTypes = {
	editable: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
	return {
		editable: state.admin.editable,
		total: state.site.data.total || {},
		info: state.site.data.info || {}
	};
};

export default connect(mapStateToProps)(MainFooter);