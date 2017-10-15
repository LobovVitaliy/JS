import React, { Component } from 'react';
import './index.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Grid, Row } from 'react-bootstrap';

import Contacts from './components/Contacts';
import SocialNetworks from './components/SocialNetworks';

import { setMail, setPhone } from '../../../redux/actions/site';

const networks =[
	{ link: '#facebook', icon: 'icon-facebook' },
	{ link: '#gplus', icon: 'icon-gplus' },
	{ link: '#twitter', icon: 'icon-twitter' },
	{ link: '#pinterest', icon: 'icon-pinterest' },
	{ link: '#behance', icon: 'icon-behance' },
	{ link: '#dribbble', icon: 'icon-dribbble' }
];

class SiteHeader extends Component {
	constructor(props) {
		super(props);

		this.onChangeMail = this.onChangeMail.bind(this);
		this.onChangePhone = this.onChangePhone.bind(this);
	}

	onChangeMail(e) {
		this.props.dispatch(setMail(e.target.value));
	}

	onChangePhone(e) {
		this.props.dispatch(setPhone(e.target.value));
	}

	render() {
		const { editable, info } = this.props;
		return (
			<header className='SiteHeader visible-lg'>
				<Grid className='SiteHeader-grid'>
					<Row className='SiteHeader-main'>
						<Contacts editable={editable}
								  mail={info.mail}
								  onChangeMail={this.onChangeMail}
								  phone={info.phone}
								  onChangePhone={this.onChangePhone} />
						<SocialNetworks networks={networks} />
					</Row>
				</Grid>
			</header>
		);
	}
}

SiteHeader.propTypes = {
	editable: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
	return {
		editable: state.admin.editable,
		info: state.site.data.info || {}
	};
};

export default connect(mapStateToProps)(SiteHeader);