import React, { Component } from 'react';
import './index.css';

import MainHeaderH from './components/MainHeaderH';
import MainHeaderV from './components/MainHeaderV';

const info = {
	logo: {
		link: '',
		img:  require('../../img/logo.png')
	},
	menu: [
		{ text: 'home',      link: '#home' },
		{ text: 'portfolio', link: '#portfolio' },
		{ text: 'blog',      link: '#blog' },
		{ text: 'pages',     link: '#pages' },
		{ text: 'features',  link: '#features' },
		{ text: 'mega menu', link: '#mega-menu' },
		{ text: 'contact',   link: '#contact' }
	]
}

class MainHeader extends Component {
	constructor(props) {
		super(props);

		this.state = { visible: false };

		info.menu.push({
			text: <i className='search'></i>,
			link: '#search'
		});
	}

	changeVisibility = () => {
		this.setState({ visible: !this.state.visible })
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