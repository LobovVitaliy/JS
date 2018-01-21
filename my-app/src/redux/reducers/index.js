import { combineReducers } from 'redux';

import auth from './auth';
import admin from './admin';
import site from './site';

const reducers = combineReducers({
	auth,
	admin,
	site
});
 
export default reducers;