import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGIN_RESET,
	LOGOUT_SUCCESS
} from '../actions/auth';

const defaultState = {
	isFetching: false,
	isLoggedIn: false,
	token: '',
	error: ''
};

function reducer(state = defaultState, action) {
	switch (action.type) {
		case LOGIN_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
				isLoggedIn: false
			});
		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				isLoggedIn: true,
				token: action.token,
				error: ''
			});
		case LOGIN_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				isLoggedIn: false,
				error: action.error
			});
		case LOGIN_RESET:
			return Object.assign({}, state, {
				error: ''
			});
		case LOGOUT_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				isLoggedIn: false,
				token: ''
			});
		default:
			return state;
	}
}

export default reducer;