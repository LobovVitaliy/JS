import React, { Component } from 'react';
import './index.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Grid, Row, Col } from 'react-bootstrap';
import AutosizeInput from 'react-input-autosize';

import Menu from '../../components/Menu';

import { setCopyright } from '../../../redux/actions/site';

const menu = [
	{ text: 'Home',      link: '#home' },
	{ text: 'Portfolio', link: '#portfolio' },
	{ text: 'Blog',      link: '#blog' },
	{ text: 'About',     link: '#about' },
	{ text: 'Services',  link: '#services' },
	{ text: 'Contact',   link: '#contact' }
];

class SiteFooter extends Component {
	onChange(e) {
		this.props.dispatch(setCopyright(e.target.value));
	}

	renderCopyright() {
		const { editable, copyright } = this.props;
		if (editable) {
			return (
				<AutosizeInput className='copyright edit'
							   value={copyright}
							   onChange={this.onChange.bind(this)} />
			);
		} else {
			return <div className='copyright'>{copyright}</div>;
		}
	}

	render() {
		return (
			<footer className='SiteFooter'>
				<Grid className='many-center'>
					<Row>
						<Col lg={6} md={6} sm={5} xs={12}>
							{this.renderCopyright()}
						</Col>
						<Col lg={6} md={6} sm={7} xs={12}>
							<Menu navClass='SiteFooter-nav'
								  listClass='SiteFooter-list'
								  itemClass='SiteFooter-item'
								  list={menu} />
						</Col>
					</Row>
				</Grid>
			</footer>
		);
	}
}

SiteFooter.propTypes = {
	editable: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
	return {
		editable: state.admin.editable,
		copyright: state.site.data.copyright || ''
	};
};

export default connect(mapStateToProps)(SiteFooter);