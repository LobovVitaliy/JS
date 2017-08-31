import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
	render() {
		return (
			<nav className={this.props.navClass}>
				<ul className={this.props.listClass}>
					{this.props.list.map((item, i) => {
						return (
							<li className={this.props.itemClass} key={i}>
								<a className={this.props.linkClass} href={item.link}>
									{item.text}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default Menu;

// import Menu from '../Menu/Menu';