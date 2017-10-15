import React, { Component } from 'react';
import './index.css';

import { connect } from 'react-redux';

import { Grid, Row, Col } from 'react-bootstrap';

import MainInfo from '../../components/MainInfo';

import {
	setTitle,
	setText,
	setAboutListTitle,
	setAboutListText
} from '../../../redux/actions/site';

class WhoWeAre extends Component {
	constructor(props) {
		super(props);

		this.setTitle = this.setTitle.bind(this);
		this.setText = this.setText.bind(this);
	}

	setTitle(e) {
		this.props.dispatch(setTitle('about', e.target.value));
	}

	setText(e) {
		this.props.dispatch(setText('about', e.target.value));
	}

	setListTitle(i, e) {
		this.props.dispatch(setAboutListTitle(i, e.target.value));
	}

	setListText(i, e) {
		this.props.dispatch(setAboutListText(i, e.target.value));
	}

	renderIconInfo(item, i) {
		const icons = ['heart', 'lightbulb', 'star'];
		return (
			<Col lg={4} md={4} sm={12} key={i}>
				<Row>
					<Col lg={3} md={3}>
						<div className={`IconBlock ${icons[i]}`}></div>
					</Col>
					<MainInfo lg={9} md={9}
							  editable={this.props.editable}
							  titleClass='IconInfo-title'
							  title={item.title}
							  onChangeTitle={this.setListTitle.bind(this, i)}
							  textClass='IconInfo-text'
							  text={item.text}
							  onChangeText={this.setListText.bind(this, i)} />
				</Row>
			</Col>
		);
	}

	render() {
		const {
			editable,
			about: {
				info={},
				list=[]
			}
		} = this.props;
		return (
			<div className='WhoWeAre one-center'>
				<Grid>
					<Row>
						<MainInfo editable={editable}
								  titleClass='WhoWeAre-title'
								  title={info.title} onChangeTitle={this.setTitle}
								  textClass='WhoWeAre-text'
								  text={info.text} onChangeText={this.setText} />
					</Row>
					<Row className='WhoWeAre-list'>
						{list.map(this.renderIconInfo, this)}
					</Row>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		editable: state.admin.editable,
		about: state.site.data.about || {}
	};
};

export default connect(mapStateToProps)(WhoWeAre);