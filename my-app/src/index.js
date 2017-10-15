import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import store from './redux/store';
import App from './App';

const AppRouter = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
};

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();