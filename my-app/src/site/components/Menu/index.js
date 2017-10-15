import React, { Component } from 'react';
import './index.css';

class Menu extends Component {
	renderItem(item, i) {
		return (
			<li className={this.props.itemClass} key={i}>
				<a className={this.props.linkClass} href={item.link}>
					{item.text}
				</a>
			</li>
		);
	}

	render() {
		return (
			<nav className={this.props.navClass}>
				<ul className={this.props.listClass}>
					{this.props.list.map(this.renderItem, this)}
				</ul>
			</nav>
		);
	}
}

export default Menu;