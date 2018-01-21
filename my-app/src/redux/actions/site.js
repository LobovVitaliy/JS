import axios from 'axios';

export const GET_SITE_REQUEST = 'GET_SITE_REQUEST';
export const GET_SITE_SUCCESS = 'GET_SITE_SUCCESS';
export const GET_SITE_FAILURE = 'GET_SITE_FAILURE';

export const PUT_SITE_REQUEST = 'PUT_SITE_REQUEST';
export const PUT_SITE_SUCCESS = 'PUT_SITE_SUCCESS';
export const PUT_SITE_FAILURE = 'PUT_SITE_FAILURE';

export const SET_MAIL = 'SET_MAIL';
export const SET_PHONE = 'SET_PHONE';
export const SET_ADDRESS = 'SET_ADDRESS';

export const SET_COPYRIGHT = 'SET_COPYRIGHT';

export const SET_INFO_TITLE = 'SET_INFO_TITLE';
export const SET_INFO_TEXT = 'SET_INFO_TEXT';
export const SET_CONTACT_TITLE = 'SET_CONTACT_TITLE';
export const SET_CONTACT_TEXT = 'SET_CONTACT_TEXT';

export const SET_ABOUT_LIST_TITLE = 'SET_ABOUT_LIST_TITLE';
export const SET_ABOUT_LIST_TEXT = 'SET_ABOUT_LIST_TEXT';

export const SET_CARD_TITLE = 'SET_CARD_TITLE';
export const SET_CARD_TEXT = 'SET_CARD_TEXT';

export const SET_TOTAL_TITLE = 'SET_TOTAL_TITLE';
export const SET_TOTAL_TEXT = 'SET_TOTAL_TEXT';

const url = '/api/v1/site';

export function getAll(token) {
	return dispatch => {
		dispatch({ type: GET_SITE_REQUEST });

		return axios.get(url)
					.then(res => {
						dispatch({ type: GET_SITE_SUCCESS, data: res.data });
					})
					.catch(err => {
						dispatch({ type: GET_SITE_FAILURE, error: err.message });
					});
	};
}

export function saveAll(site) {
	return dispatch => {
		dispatch({ type: PUT_SITE_REQUEST });

		return axios.put(url, site)
					.then(res => {
						dispatch({ type: PUT_SITE_SUCCESS });
					})
					.catch(err => {
						dispatch({ type: PUT_SITE_FAILURE, error: err.message });
					});
	};
}


export function setMail(mail) {
	return {
		type: SET_MAIL,
		mail
	};
}

export function setPhone(phone) {
	return {
		type: SET_PHONE,
		phone
	};
}

export function setAddress(address) {
	return {
		type: SET_ADDRESS,
		address
	};
}

export function setCopyright(copyright) {
	return {
		type: SET_COPYRIGHT,
		copyright
	};
}


export function setTitle(block, title) {
	return {
		type: SET_INFO_TITLE,
		block,
		title
	};
}

export function setText(block, text) {
	return {
		type: SET_INFO_TEXT,
		block,
		text
	};
}

export function setContactTitle(title) {
	return {
		type: SET_CONTACT_TITLE,
		title
	};
}

export function setContactText(text) {
	return {
		type: SET_CONTACT_TEXT,
		text
	};
}


export function setAboutListTitle(index, title) {
	return {
		type: SET_ABOUT_LIST_TITLE,
		title,
		i: index
	}
}

export function setAboutListText(index, text) {
	return {
		type: SET_ABOUT_LIST_TEXT,
		text,
		i: index
	}
}


export function setCardTitle(index, title) {
	return {
		type: SET_CARD_TITLE,
		title,
		i: index
	}
}

export function setCardText(index, text) {
	return {
		type: SET_CARD_TEXT,
		text,
		i: index
	}
}


export function setTotalTitle(block, title) {
	return {
		type: SET_TOTAL_TITLE,
		block,
		title
	}
}

export function setTotalText(block, text) {
	return {
		type: SET_TOTAL_TEXT,
		block,
		text
	}
}