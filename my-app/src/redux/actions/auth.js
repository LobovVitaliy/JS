import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_RESET = 'LOGIN_RESET';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';


function requestLogin() {
	return {
		type: LOGIN_REQUEST
	};
}

function receiveLogin(token) {
	return {
		type: LOGIN_SUCCESS,
		token: token
	};
}

function loginError(message) {
	return {
		type: LOGIN_FAILURE,
		error: message
	};
}

const url = '/admin/login';

export function loginUser(user) {
	return dispatch => {
		dispatch(requestLogin());

		return axios.post(url, user)
					.then(res => {
						let token = res.data.token;
						dispatch(receiveLogin(token));
					})
					.catch(err => {
						dispatch(loginError(err.message));
					});
	};
}

export function logoutUser() {
	return {
		type: LOGOUT_SUCCESS
	};
}