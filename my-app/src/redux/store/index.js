import { createStore, applyMiddleware } from 'redux';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { getAll } from '../actions/site';

const reducer = storage.reducer(reducers);
const engine = createEngine('admin');
const middleware = [thunk, storage.createMiddleware(engine)];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

const load = storage.createLoader(engine);
load(store).then(newState => {
			   const token = newState.auth.token;
		       store.dispatch(getAll(token));
		   })
		   .catch(() => console.log('Failed to load previous state'));

export default store;