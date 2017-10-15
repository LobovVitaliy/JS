import React, { Component } from 'react';

import Snackbar from 'material-ui/Snackbar';

class Notice extends Component {
	render() {
		const { error, onRequestClose } = this.props;
		return (
			<Snackbar open={!!error}
					  message={error}
					  autoHideDuration={2000}
					  onRequestClose={onRequestClose} />
		);
	}
}

export default Notice;