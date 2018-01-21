import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import { getAll } from '../actions/site';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(getAll());

export default store;