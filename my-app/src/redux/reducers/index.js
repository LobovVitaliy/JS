import { combineReducers } from 'redux';
import storage from './storage';
import auth from './auth';
import admin from './admin';
import site from './site';

const reducers = combineReducers({
	storage,
	auth,
	admin,
	site
});
 
export default reducers;