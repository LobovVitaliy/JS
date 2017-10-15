import merge from 'merge';

import {
	GET_SITE_REQUEST,
	GET_SITE_SUCCESS,
	GET_SITE_FAILURE,

	PUT_SITE_REQUEST,
	PUT_SITE_SUCCESS,
	PUT_SITE_FAILURE,

	SET_MAIL,
	SET_PHONE,
	SET_ADDRESS,

	SET_COPYRIGHT,

	SET_INFO_TITLE,
	SET_INFO_TEXT,
	SET_CONTACT_TITLE,
	SET_CONTACT_TEXT,

	SET_ABOUT_LIST_TITLE,
	SET_ABOUT_LIST_TEXT,

	SET_CARD_TITLE,
	SET_CARD_TEXT,
	
	SET_TOTAL_TITLE,
	SET_TOTAL_TEXT
} from '../actions/site';

const defaultState = {
	isFetching: false,
	error: '',
	data: {}
};

function reducer(state = defaultState, action) {
	let i = 0,
		list = [],
		newList = [],
		cards = [],
		newCards = [];
	switch (action.type) {
		case GET_SITE_REQUEST:
		case PUT_SITE_REQUEST:
			return Object.assign({}, state, {
				isFetching: true
			});
		case GET_SITE_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				error: '',
				data: action.data
			});
		case PUT_SITE_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				error: ''
			});
		case GET_SITE_FAILURE:
		case PUT_SITE_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.error
			});

		case SET_MAIL:
			return merge(true, state, state.data.info.mail = action.mail);
		case SET_PHONE:
			return merge(true, state, state.data.info.phone = action.phone);
		case SET_ADDRESS:
			return merge(true, state, state.data.info.address = action.address);
		case SET_COPYRIGHT:
			return merge(true, state, state.data.copyright = action.copyright);

		case SET_INFO_TITLE:
			return merge(true, state, state.data[action.block].info.title = action.title);
		case SET_INFO_TEXT:
			return merge(true, state, state.data[action.block].info.text = action.text);
		case SET_CONTACT_TITLE:
			return merge(true, state, state.data.contact.title = action.title);
		case SET_CONTACT_TEXT:
			return merge(true, state, state.data.contact.text = action.text);

		case SET_ABOUT_LIST_TITLE:
			i = action.i;
			list = state.data.about.list;
			newList = [...list.slice(0, i), {
				...list[i], title: action.title
			}, ...list.slice(i + 1)];
			return merge(true, state, state.data.about.list = newList);
		case SET_ABOUT_LIST_TEXT:
			i = action.i;
			list = state.data.about.list;
			newList = [...list.slice(0, i), {
				...list[i], text: action.text
			}, ...list.slice(i + 1)];
			return merge(true, state, state.data.about.list = newList);
		
		case SET_CARD_TITLE:
			i = action.i;
			cards = state.data.works.cards;
			newCards = [...cards.slice(0, i), {
				...cards[i], title: action.title
			}, ...cards.slice(i + 1)];
			return merge(true, state, state.data.works.cards = newCards);
		case SET_CARD_TEXT:
			i = action.i;
			cards = state.data.works.cards;
			newCards = [...cards.slice(0, i), {
				...cards[i], text: action.text
			}, ...cards.slice(i + 1)];
			return merge(true, state, state.data.works.cards = newCards);
		
		case SET_TOTAL_TITLE:
			return merge(true, state,
				state.data.total[action.block].title = action.title);
		case SET_TOTAL_TEXT:
			return merge(true, state,
				state.data.total[action.block].text = action.text);
		default:
			return state;
	}
}

export default reducer;