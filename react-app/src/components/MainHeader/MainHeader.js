import React, { Component } from 'react';
import './MainHeader.css';

import MainHeaderH from '../MainHeaderH/MainHeaderH';
import MainHeaderV from '../MainHeaderV/MainHeaderV';

const info = {
	logo: {
		link: '',
		img:  require('../../img/logo.png')
	},
	menu: [
		{ text: 'home',      link: '#' },
		{ text: 'portfolio', link: '#' },
		{ text: 'blog',      link: '#' },
		{ text: 'pages',     link: '#' },
		{ text: 'features',  link: '#' },
		{ text: 'mega menu', link: '#' },
		{ text: 'contact',   link: '#' }
	]
}

class MainHeader extends Component {
	constructor(props) {
		super(props);

		info.menu.push({
			text: <i className='search'></i>,
			link: ''
		});

		this.state = { visible: false }
	}
	changeVisibility = () => {
		this.setState({visible: !this.state.visible})
	}
	render() {
		return (
			<header className='MainHeader'>
				<MainHeaderH info={info} toggleClick={this.changeVisibility} />
				<MainHeaderV visible={this.state.visible} list={info.menu} />
			</header>
		);
	}
}

export default MainHeader;

// import MainHeader from '../MainHeader/MainHeader';