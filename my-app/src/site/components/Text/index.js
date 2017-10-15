import React, { Component } from 'react';
import './index.css';

import TextareaAutosize from 'react-autosize-textarea';

class Text extends Component {
	render() {
		const { editable, className='text', text, onChange } = this.props;
		if (editable) {
			return (
				<TextareaAutosize className={`edit ${className}`}
								  value={text} onChange={onChange} />
			);
		} else {
			return <div className={className}>{text}</div>;
		}
	}
}

export default Text;