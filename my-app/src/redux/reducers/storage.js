import { LOAD, SAVE } from 'redux-storage';

function reducer(state = { loaded: false }, action) {
	switch (action.type) {
		case LOAD:
			return { ...state, loaded: true };
		case SAVE:
		default:
			return state;
	}
}

export default reducer;