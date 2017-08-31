import React, { Component } from 'react';
import './BtnToTop.css';

class BtnToTop extends Component {
	toTop = () => {
		window.scrollBy(0, -100);
		if (window.pageYOffset > 0) {
			requestAnimationFrame(this.toTop);
		}
	}
	render() {
		return (
			<button onClick={this.toTop} className='BtnToTop'>top</button>
		);
	}
}

export default BtnToTop;

// import BtnToTop from '../BtnToTop/BtnToTop';