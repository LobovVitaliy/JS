import React, { Component } from 'react';
import './index.css';

import TextareaAutosize from 'react-autosize-textarea';

class Title extends Component {
	render() {
		const { editable, className='title', title, onChange } = this.props;
		if (editable) {
			return (
				<TextareaAutosize className={`edit ${className}`}
								  value={title} onChange={onChange} />
			);
		} else {
			return <div className={className}>{title}</div>;
		}
	}
}

export default Title;